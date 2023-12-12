<template>
  <v-card variant="outlined" :loading="loading">
    <v-card-title
      class="d-flex align-center"
      @click="toggleExpanded"
      style="cursor: pointer"
      v-ripple
    >
      <v-icon start>mdi-robot-happy</v-icon>
      Typebot
      <v-spacer></v-spacer>
      <v-btn
        size="small"
        icon
        :disabled="loading"
        variant="tonal"
        @click.stop="toggleExpanded"
        :style="{ transform: expanded ? 'rotate(180deg)' : '' }"
      >
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text v-if="expanded">
      <v-alert v-if="error" type="error" class="mb-3">
        {{ error }}
      </v-alert>

      <v-form v-model="valid">
        <v-text-field
          v-model="typebotData.url"
          label="URL"
          :disabled="loading"
          outlined
          dense
          hide-details="auto"
          class="mb-3"
          :rules="[
            (url) => {
              if (!url) return 'URL é obrigatório';
              if (!url.startsWith('http'))
                return 'URL deve começar com http ou https';
              return true;
            },
          ]"
        />

        <div class="d-flex gap-4 flex-wrap">
          <div class="flex-grow-1">
            <v-text-field
              v-model="typebotData.typebot"
              label="Nome do fluxo do Typebot"
              :disabled="loading"
              outlined
              dense
              hide-details="auto"
              class="mb-3"
              hint="O nome do fluxo do Typebot que será utilizado"
              :rules="[
                (account_id) => {
                  if (!account_id) return 'Typebot é obrigatório';
                  return true;
                },
              ]"
            />
          </div>
          <div class="flex-grow-1">
            <v-text-field
              v-model="typebotData.keyword_finish"
              label="Palavra-chave de finalização"
              placeholder="#SAIR"
              :disabled="loading"
              outlined
              dense
              hide-details="auto"
              class="mb-3"
              hint="Palavra-chave para finalizar o fluxo"
              :rules="[
                (token) => {
                  if (!token)
                    return 'Palavra-chave de finalização é obrigatório';
                  return true;
                },
              ]"
            />
          </div>
        </div>

        <div class="d-flex gap-4 flex-wrap">
          <div class="flex-grow-1">
            <v-text-field
              v-model="typebotData.expire"
              label="Tempo de expiração (em minutos)"
              :disabled="loading"
              type="number"
              min="0"
              outlined
              dense
              hide-details="auto"
              hint="Tempo para encerrar a sessão caso não haja interação"
              class="mb-3"
              :rules="[
                (v) => {
                  if (!v) return 'Tempo de expiração é obrigatório';
                  return true;
                },
              ]"
            />
          </div>
          <div class="flex-grow-1">
            <v-text-field
              v-model="typebotData.delay_message"
              label="Tempo de atraso da mensagem (em milisegundos)"
              type="number"
              min="0"
              :hint="`Tempo de simulação de digitação - ${
                typebotData.delay_message
              }ms = ${(typebotData.delay_message / 1000)
                .toFixed(1)
                .replace('.0', '')}s`"
              :disabled="loading"
              outlined
              dense
              hide-details="auto"
              class="mb-3"
              :rules="[
                (token) => {
                  if (token == null || token < 0)
                    return 'Palavra-chave de finalização é obrigatório';
                  return true;
                },
              ]"
            />
          </div>
        </div>

        <v-text-field
          v-model="typebotData.unknown_message"
          label="Mensagem de desconhecido"
          :disabled="loading"
          outlined
          dense
          hide-details="auto"
          class="mb-3"
          :rules="[
            (token) => {
              if (!token) return 'Mensagem de desconhecido é obrigatório';
              return true;
            },
          ]"
        />

        <div class="d-flex">
          <v-checkbox
            class="flex-shrink-1"
            v-model="typebotData.listening_from_me"
            label="Ouvir mensagens enviadas por mim"
            :disabled="loading"
          >
            <template v-slot:label>
              <span>Ouvir mensagens enviadas por mim</span>
              <HelpTooltip>
                Envia as mensagens enviadas por você para o fluxo do Typebot
              </HelpTooltip>
            </template>
          </v-checkbox>
        </div>
      </v-form>
    </v-card-text>
    <v-card-actions v-if="expanded">
      <v-switch
        v-model="typebotData.enabled"
        label="Habilitado"
        color="primary"
        :disabled="loading"
        hide-details
      ></v-switch>

      <v-btn
        :disabled="loading"
        variant="text"
        @click="openTypebotSessions"
        size="small"
      >
        ver {{ typebotData.sessions.length }} sess{{
          typebotData.sessions.length != 1 ? "ões" : "ão"
        }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :disabled="
          !valid ||
          JSON.stringify(typebotData) === JSON.stringify(defaultTypebotData)
        "
        :loading="loading"
        color="primary"
        @click="saveTypebot"
        variant="tonal"
      >
        Salvar
      </v-btn>
    </v-card-actions>
  </v-card>
  <TypebotSessions
    :instance="instance"
    :loading="loading"
    :data="typebotData"
    @refresh="loadTypebot"
    ref="typebotSessions"
  />
</template>

<script>
import TypebotSessions from "@/components/modal/TypebotSessions.vue";
import instanceController from "@/services/instanceController";
const defaultObj = () => ({
  enabled: false,
  expire: 0,
  delay_message: 0,
  listening_from_me: false,
  sessions: [],
  typebot: "",
  url: "",
  keyword_finish: "",
  unknown_message: "",
});

export default {
  name: "InstanceTypebot",
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    expanded: false,
    loading: false,
    error: false,
    valid: false,
    typebotData: {
      enabled: false,
      expire: 0,
      delay_message: 0,
      sessions: [],
      listening_from_me: false,
      typebot: "",
      url: "",
      keyword_finish: "",
      unknown_message: "",
    },
    defaultTypebotData: {
      enabled: false,
      expire: 0,
      delay_message: 0,
      listening_from_me: false,
      sessions: [],
      typebot: "",
      url: "",
      keyword_finish: "",
      unknown_message: "",
    },
  }),
  methods: {
    openTypebotSessions() {
      this.$refs.typebotSessions.open();
    },
    toggleExpanded() {
      if (this.loading) return;
      this.expanded = !this.expanded;
    },
    async saveTypebot() {
      try {
        this.loading = true;
        this.error = false;
        await instanceController.typebot.set(
          this.instance.instance.instanceName,
          {
            ...this.typebotData,
            url: this.typebotData.url.trim().replace(/\/$/, ""),
            delay_message: parseInt(this.typebotData.delay_message),
            expire: parseInt(this.typebotData.expire),
            listening_from_me: !!this.typebotData.listening_from_me,
          }
        );
        this.defaultTypebotData = Object.assign(defaultObj(), this.typebotData);
      } catch (e) {
        this.error = e.message?.message || e.message || e;
      } finally {
        this.loading = false;
      }
    },
    async loadTypebot() {
      try {
        this.loading = true;
        this.error = false;
        const typebotData = await instanceController.typebot.get(
          this.instance.instance.instanceName
        );
        this.typebotData = Object.assign(defaultObj(), typebotData);
        this.defaultTypebotData = Object.assign(defaultObj(), typebotData);
      } catch (e) {
        this.error = e.message?.message || e.message || e;
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    expanded(expanded) {
      if (expanded) this.loadTypebot();
    },
  },
  components: { TypebotSessions },
};
</script>

<style></style>
