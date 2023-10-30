<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
    :persistent="!AppStore.validConnection"
  >
    <v-card>
      <v-card-text>
        <v-form v-model="valid">
          <h3 class="mb-4">Criar instancia</h3>
          <v-text-field
            v-model="instance.instanceName"
            label="Nome"
            required
            outlined
            :rules="[
              // Verify is not have any caracter except letters, numbers, _ and -
              (v) =>
                new RegExp('^[a-zA-Z0-9_-]*$', 'i').test(v) ||
                'Nome inválido (apenas letras, números, _ e -)',
            ]"
          />
          <v-text-field
            v-model="instance.apiKey"
            label="API Key"
            required
            outlined
            @click:prepend-inner="generateApiKey"
            prepend-inner-icon="mdi-lock-reset"
            :rules="[
              // Verify is not have any caracter except letters, numbers, _ and -
              (v) =>
                new RegExp('^[a-zA-Z0-9_-]*$', 'i').test(v) ||
                'Nome inválido (apenas letras, números, _ e -)',
            ]"
          />
        </v-form>

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
    valid: false,
    instance: {
      instanceName: "",
      apiKey: "",
    },
    loading: false,
    error: false,
    AppStore: useAppStore(),
  }),
  methods: {
    generateApiKey() {
      this.instance.apiKey =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
    },
    async save() {
      try {
        this.loading = true;
        this.error = false;

        const instance = await instanceController.create(this.instance);

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
      this.generateApiKey();
    },
  },

  emits: ["close"],
};
</script>
