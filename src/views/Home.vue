<template>
  <div>
    <div class="d-flex mb-4 align-center">
      <h3>Instancias</h3>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="loading"
        @click="getInstances"
        icon
        variant="text"
        size="small"
        class="mr-2"
      >
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        variant="tonal"
        @click="addInstance"
        :disabled="loading"
      >
        <v-icon>mdi-plus</v-icon>
        <span class="ml-2">Instancia</span>
      </v-btn>
    </div>

    <v-row dense>
      <v-col cols="12" v-if="instances.length === 0 || loading">
        <v-progress-linear
          v-if="loading"
          indeterminate
        color="info"
        ></v-progress-linear>
        <v-alert type="info" class="mb-4" v-else :loading="loading" outlined>
          {{ loading ? "Carregando..." : "Nenhuma instância encontrada" }}
        </v-alert>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="{ instance } in instances"
        :key="instance.instanceName"
      >
        <v-card
          @click="goToInstance(instance)"
          class="pa-2 rounded-lg"
          variant="outlined"
          :disabled="loading"
        >
          <div class="d-flex align-center gap-2">
            <v-avatar size="50">
              <v-img
                v-if="instance.profilePictureUrl"
                :src="instance.profilePictureUrl"
              />
              <v-icon v-else>{{ statusMapper[instance.status].icon }}</v-icon>
            </v-avatar>
            <div class="flex-shrink-1">
              <v-chip
                :color="statusMapper[instance.status].color"
                size="x-small"
                label
              >
                <v-icon
                  v-if="statusMapper[instance.status].icon"
                  start
                  size="x-small"
                >
                  {{ statusMapper[instance.status].icon }}
                </v-icon>
                {{ statusMapper[instance.status].text }}
              </v-chip>
              <h5>{{ instance.instanceName }}</h5>
            </div>
            <div class="ml-auto flex-shrink-0">
              <!-- <v-btn
                :disabled="loading"
                :to="`/${instance.instanceName}`"
                icon
                size="x-small"
                class="mr-1"
                variant="tonal"
                color="info"
              >
                <v-icon>mdi-cog</v-icon>
              </v-btn> -->
              <v-btn
                :disabled="loading || !!loadingDelete"
                :loading="loadingDelete === instance.instanceName"
                @click.stop="deleteInstance(instance.instanceName)"
                icon
                variant="tonal"
                color="error"
                size="x-small"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-alert v-if="error" type="error">
      {{ error }}
    </v-alert>
  </div>
  <CreateInstance ref="createInstanceModal" />
</template>

<script>
import { useAppStore } from "@/store/app";
import CreateInstance from "@/components/modal/CreateInstance";
import statusMapper from "@/helpers/mappers/status";
import instanceController from "@/services/instanceController";

export default {
  name: "HomeInstance",
  components: {
    CreateInstance,
  },
  data: () => ({
    AppStore: useAppStore(),
    loading: false,
    loadingDelete: false,
    error: false,
    statusMapper: statusMapper,
    headers: [
      {
        title: "Nome",
        align: "start",
        sortable: true,
        key: "instance.instanceName",
      },
      { title: "Status", key: "instance.status" },
      { title: "Ações", key: "actions", sortable: false, align: "center" },
    ],
  }),
  methods: {
    addInstance() {
      this.$refs.createInstanceModal.open();
    },
    goToInstance(instance) {
      this.$router.push(`/${instance.instanceName}`);
    },
    async deleteInstance(instanceName) {
      try {
        this.loadingDelete = instanceName;
        const confirm = window.confirm(
          `Tem certeza que deseja excluir a instância ${instanceName}?`
        );
        if (!confirm) return;

        await instanceController.logout(instanceName).catch(() => {});
        await instanceController.delete(instanceName);
        await this.AppStore.reconnect();
      } catch (e) {
        this.error = e.message?.message || e.message || e;
      } finally {
        this.loadingDelete = false;
      }
    },
    async getInstances() {
      try {
        this.loading = true;
        this.instances = await this.AppStore.reconnect();
      } catch (e) {
        this.error = e.message?.message || e.message || e;
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {},
  computed: {
    instances() {
      return this.AppStore.instances;
    },
  },
  mounted() {},
};
</script>
