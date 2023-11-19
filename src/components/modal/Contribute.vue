<template>
  <v-dialog v-model="dialog" max-width="350px" scrollable>
    <v-card>
      <v-card-text>
        <div class="d-flex flex-column align-center">
          <h4>Contribua via PIX</h4>
          <v-img
            src="@/assets/pix.svg"
            height="300px"
            width="300px"
            class="mb-2"
          />

          <v-chip @click="copy" size="small">
            {{ key }}
            <v-icon end size="small" v-if="!copied">mdi-content-copy</v-icon>
            <v-icon end size="small" v-else>mdi-check</v-icon>
          </v-chip>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false" :disabled="loading"> Fechar </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SettingsModal",
  data: () => ({
    key: "14d43649-13dd-48f8-8b98-feb9b0f11892",
    dialog: false,
    copied: false,
    isHttps: window.location.protocol === "https:",
  }),
  methods: {
    copy() {
      if (this.copied) return;
      if (!navigator.clipboard)
        return alert("Seu navegador não suporta a função de copiar texto.");
      navigator.clipboard.writeText(this.key);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    },
    open() {
      this.dialog = true;
    },
  },
};
</script>
