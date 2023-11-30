<template>
  <v-dialog v-model="dialog" max-width="700px" scrollable>
    <v-card>
      <v-card-title>
        Como configurar a caixa de entrada do chatwoot?
      </v-card-title>

      <v-card-text>
        <p>
          <b>Passo 1:</b> Acesse as configurações > Caixa de Entrada e
          "Adicionar Caixa"
        </p>
        <p class="mt-2"><b>Passo 2:</b> Selecione "API" como tipo de caixa</p>
        <v-img src="@/assets/chatwoot/chatwoot_api.png" />

        <p class="mt-2 mb-1">
          <b>Passo 3:</b> Preencha nome da caixa e webhook. Os valores devem ser
          exatamente os seguintes:
        </p>
        <div class="d-flex flex-wrap gap-2">
          <v-text-field
            v-model="instanceName"
            label="Nome"
            readonly
            variant="solo-filled"
            hide-details
            density="compact"
            :prepend-inner-icon="
              copy.instanceName ? 'mdi-check' : 'mdi-content-copy'
            "
            @click="copyValue('instanceName')"
            @click:prepend-inner="copyValue('instanceName')"
          />
          <v-text-field
            v-model="webhook"
            label="Webhook"
            readonly
            variant="solo-filled"
            hide-details
            density="compact"
            :prepend-inner-icon="
              copy.webhook ? 'mdi-check' : 'mdi-content-copy'
            "
            @click="copyValue('webhook')"
            @click:prepend-inner="copyValue('webhook')"
          />
        </div>
        <v-img src="@/assets/chatwoot/chatwoot_api_1.png" />

        <!-- Step 4: Add agents to the inbox. -->
        <p><b>Passo 4:</b> Adicione os agentes à caixa de entrada.</p>
        <v-img src="@/assets/chatwoot/chatwoot_api_2.png" />

        <!-- Step 5: Ready. -->
        <p><b>Passo 5:</b> Pronto! Agora você pode receber mensagens.</p>
        <v-img src="@/assets/chatwoot/chatwoot_api_3.png" />

        <!-- Add link to chatwoot doc -->
        <!-- https://www.chatwoot.com/docs/product/channels/api/create-channel -->
        <v-btn
          size="small"
          variant="text"
          block
          href="https://www.chatwoot.com/docs/product/channels/api/create-channel"
          target="_blank"
        >
          Ver documentação completa
        </v-btn>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false"> fechar </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { useAppStore } from "@/store/app";
import copyToClipboard from "@/helpers/copyToClipboard";
export default {
  name: "SettingsModal",
  data: () => ({
    dialog: false,
    AppStore: useAppStore(),
    copy: {
      webhook: false,
      instanceName: false,
    },
  }),
  methods: {
    open() {
      this.dialog = true;
    },
    copyValue(key) {
      copyToClipboard(this[key]);

      this.copy[key] = true;
      setTimeout(() => {
        this.copy[key] = false;
      }, 5000);
    },
  },
  computed: {
    instanceName() {
      return this.instance.instance.instanceName;
    },
    webhook() {
      const url = new URL(this.AppStore.connection.host);

      return `${url.origin}/chatwoot/webhook/${this.instanceName}`;
    },
  },
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },

  emits: ["close"],
};
</script>
