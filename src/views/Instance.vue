<template>
  <v-alert v-if="error" type="error">
    {{ error }}
  </v-alert>
  <div v-else-if="instance" class="d-flex flex-column" style="gap: 1.5rem">
    ;
    <v-card variant="outlined" class="d-flex align-center">
      <v-avatar size="100">
        <v-icon v-if="statusMapper[instance.instance.status].icon" size="70">
          {{ statusMapper[instance.instance.status].icon }}
        </v-icon>
      </v-avatar>
      <div>
        <h2>{{ instance.instance.instanceName }}</h2>
      </div>
    </v-card>
    <v-alert
      icon="mdi-qrcode-scan"
      v-if="instance.status != 'connected'"
      type="warning"
    >
      <div class="d-flex justify-space-between align-center flex-wrap">
        <span>Telefone não conectado</span>
        <v-btn @click="connectPhone" size="small"> Conectar </v-btn>
      </div>
    </v-alert>
  </div>
</template>

<script>
import { useAppStore } from "@/store/app";
import statusMapper from "@/helpers/mappers/status";

export default {
  name: "HomeInstance",
  data: () => ({
    AppStore: useAppStore(),
    loading: true,
    error: false,
    instance: null,
    statusMapper: statusMapper,
  }),
  methods: {
    async loadInstance() {
      if (!this.AppStore.instances) await this.AppStore.reconnect();
      const instances = this.AppStore.instances;
      const instance = instances.find(
        (instance) => instance.instance.instanceName === this.$route.params.id
      );
      if (!instance) {
        this.error = "Instância não encontrada";
        return;
      }
      this.instance = instance;
    },
  },
  watch: {},
  async mounted() {
    if (this.AppStore.validConnection) this.loadInstance();
    else this.$router.push({ name: "instances" });
  },
};
</script>
