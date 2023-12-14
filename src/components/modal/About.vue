<template>
  <v-dialog v-model="dialog" max-width="600px" scrollable>
    <v-card>
      <v-card-text>
        <div class="d-flex flex-column align-center">
          <v-img
            src="@/assets/logo.png"
            height="100"
            width="100"
            class="mb-4"
          />
          <h3 class="mt-5 mb-2">Evolution Manager</h3>
          <p>
            O Evolution Manager, independente da
            <a
              href="https://github.com/EvolutionAPI/evolution-api/"
              target="_blank"
            >
              Evolution API</a
            >, facilita a gestão de suas APIs com uma interface intuitiva. Ele
            foi criado por desenvolvedores independentes, focando em melhorar a
            experiência do usuário e a administração das funcionalidades da API.
          </p>
          <div
            class="d-flex gap-x-2 gap-y-1 align-center justify-center mt-5 flex-wrap"
          >
            <v-btn
              href="https://github.com/gabrielpastori1/evolution-manager"
              target="_blank"
              color="grey-darken-3"
            >
              <v-icon start>mdi-github</v-icon>
              Repositório no GitHub
            </v-btn>
            <v-btn @click="contribute" color="light-blue">
              <v-icon start>mdi-hand-coin</v-icon>
              Contribua com o projeto
            </v-btn>
          </div>

          <h3 class="mt-5 mb-2">Processamento de Dados</h3>
          <p>
            O processamento e armazenamento de dados ocorre <b>localmente</b> no
            seu navegador, sem uso de um backend centralizado. Isso reforça a
            segurança e privacidade, mantendo suas informações confidenciais e
            protegidas.
          </p>
          <v-alert v-if="isHttps" color="info" class="mt-2" variant="tonal">
            Por conta de todo o processamento ser realizado no navegador, é
            necessário que o servidor da Evolution API seja acessado através de
            uma conexão segura (HTTPS).
          </v-alert>
          
          <span class="mt-5 mb-2 text-disabled">Versão: {{ version }}</span>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false" block :disabled="loading"> Fechar </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <contribute ref="contribute" />
</template>

<script>
import Contribute from "./Contribute.vue";
import { version } from "../../../package.json";
export default {
  name: "SettingsModal",
  data: () => ({
    dialog: false,
    version,
    isHttps: window.location.protocol === "https:",
  }),
  methods: {
    contribute() {
      this.$refs.contribute.open();
    },
    open() {
      this.dialog = true;
    },
  },
  components: { Contribute },
};
</script>
