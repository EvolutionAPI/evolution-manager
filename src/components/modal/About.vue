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
              >Evolution API</a
            >, facilita a gestão de suas APIs com uma interface intuitiva. Ele
            foi criado por desenvolvedores independentes, focando em melhorar a
            experiência do usuário e a administração das funcionalidades da API.
          </p>

          <v-btn
            href="https://github.com/gabrielpastori1/evolution-manager"
            target="_blank"
            class="mt-5"
            color="grey darken-3"
          >
            <v-icon start>mdi-github</v-icon>
            Repositório no GitHub
          </v-btn>

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

          <h3 class="mt-5 mb-2">Limitações do Projeto</h3>
          <p>
            Como um projeto open-source mantido por voluntários, não há
            garantias de atualizações futuras. A independência do Evolution
            Manager em relação à Evolution API significa que alterações na API
            podem afetar a funcionalidade do Manager.
          </p>
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
    dialog: false,
    isHttps: window.location.protocol === "https:",
  }),
  methods: {
    open() {
      this.dialog = true;
    },
  },
};
</script>
