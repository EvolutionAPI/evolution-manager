<template>
  <v-footer absolute app class="pt-10">
    <div class="d-flex flex-grow-1 flex-wrap gap-y-1 align-end">
      <div class="flex-shrink-0 d-flex gap-2 align-center">
        <v-btn
        @click="about"
        variant="tonal"
          size="small"
          color="blue"
          >
          <v-icon start> mdi-information </v-icon>
          Sobre
        </v-btn>
        <v-btn
        @click="contribute"
          variant="tonal"
          size="small"
          color="light-blue-lighten-1"
        >
          <v-icon start>mdi-hand-coin</v-icon>
          Contribua com o projeto
        </v-btn>
        <p style="font-size: 12px" class="text-disabled">v{{ version }}</p>
      </div>
      <v-spacer />
      <div class="d-flex gap-x-1">
        <v-btn
          v-for="(link, i) in links"
          size="small"
          variant="tonal"
          :key="i"
          :href="link.url"
          target="_blank"
        >
          <v-icon v-if="link.icon" :start="!!link.title">
            {{ link.icon }}
          </v-icon>
          {{ link.title }}
        </v-btn>
      </div>
    </div>
  </v-footer>
  <Contribute ref="contribute" />
  <About ref="about" />
</template>

<script>
import About from "@/components/modal/About.vue";
import Contribute from "@/components/modal/Contribute.vue";
import { version } from "../../../package.json";

export default {
  name: "AppFooter",
  data: () => ({
    version,
    links: [
      {
        title: "Discord",
        url: "https://discord.gg/U66zvhV49B",
      },
      {
        title: "Postman",
        url: "https://www.postman.com/agenciadgcode/workspace/evolution-api/overview",
      },
      {
        title: "Evolution-Api",
        icon: "mdi-github",
        url: "https://github.com/EvolutionAPI/evolution-api",
      },
      {
        title: "Doc",
        icon: "mdi-book-open-page-variant",
        url: "https://doc.evolution-api.com/help-center",
      },
    ],
  }),
  methods: {
    
    about() {
      this.$refs.about.open();
    },
    contribute() {
      this.$refs.contribute.open();
    },
  },
  components: { Contribute, About },
};
</script>

<style></style>
