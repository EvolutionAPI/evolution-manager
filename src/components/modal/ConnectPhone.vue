<template>
  <v-alert
    icon="mdi-qrcode-scan"
    v-if="instance.instance?.status != 'open'"
    type="warning"
  >
    <div class="d-flex justify-space-between align-center flex-wrap">
      <span>Telefone não conectado</span>
      <v-btn @click="startConnect" size="small"> Conectar </v-btn>
    </div>
  </v-alert>
  <v-dialog v-model="dialog" max-width="350px">
    <v-card :loading="loading && qrCode">
      <v-card-text>
        <v-img v-if="qrCode" :src="qrCode" width="300px" height="300px" />
        <v-card
          v-else
          width="300px"
          height="300px"
          variant="outlined"
          elevation="0"
        >
          <v-card-text class="d-flex justify-center align-center h-100">
            <v-progress-circular v-if="loading" indeterminate color="primary" />
            <v-icon v-else-if="error" size="x-large">mdi-qrcode-remove</v-icon>
          </v-card-text>
        </v-card>

        <v-alert type="error" v-if="error" class="mt-2">
          {{ Array.isArray(error) ? error.join(", ") : error }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false" :disabled="loading"> Cancel </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { useAppStore } from "@/store/app";
import instanceController from "@/services/instanceController";

export default {
  name: "SettingsModal",
  data: () => ({
    dialog: false,
    error: false,

    loading: false,
    qrCode: null,
    success: false,

    timeout: null,

    AppStore: useAppStore(),
  }),
  methods: {
    async loadQr() {
      try {
        this.loading = true;
        this.error = false;

        const response = await instanceController.connect(
          this.instance.instance.instanceName
        );

        if (response.base64) this.qrCode = response.base64;
        else if (response.instance) {
          this.dialog = false;
          return;
        } else throw new Error("Não foi possível carregar o QR Code, se o erro persistir, reinicie a API e tente novamente.");

        this.timeout = setTimeout(this.loadQr, 40000);
      } catch (e) {
        this.error = e.message?.message || e.message || e;
      } finally {
        this.loading = false;
      }
    },
    async startConnect() {
      clearTimeout(this.timeout);
      this.dialog = true;
      this.error = false;

      await this.loadQr();
      await this.AppStore.reconnect();
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
