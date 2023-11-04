<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
    :persistent="!AppStore.validConnection"
  >
    <v-card>
      <v-card-text>
        <v-alert type="error" v-if="error">
          {{ Array.isArray(error) ? error.join(", ") : error }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="AppStore.validConnection"
          text
          @click="dialog = false"
          :disabled="loading"
        >
          Cancel
        </v-btn>
        <v-btn
          color="success"
          variant="tonal"
          @click="save"
          :disabled="!valid"
          :loading="loading"
        >
          Conectar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import instanceController from "@/services/instanceController";
import { useAppStore } from "@/store/app";

export default {
  name: "SettingsModal",
  data: () => ({
    dialog: false,
    loading: false,
    error: false,
    AppStore: useAppStore(),
  }),
  methods: {
    async save() {
      try {
        this.loading = true;
        this.error = false;

        const instance = await instanceController.create(this.instance);
        await this.AppStore.reconnect();

        this.$router.push({
          name: "instance",
          params: { id: instance.instance.instanceName },
        });
      } catch (e) {
        this.error = e.message?.message || e.message || e;
      } finally {
        this.loading = false;
      }
    },
    open() {
      this.dialog = true;
      this.error = false;
      this.instance.instanceName = "";
      this.generateApiKey();
    },
  },

  emits: ["close"],
};
</script>
