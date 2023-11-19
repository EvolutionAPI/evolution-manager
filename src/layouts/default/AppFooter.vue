<template>
  <v-footer absolute app class="pt-10">
    <div class="d-flex flex-grow-1 flex-wrap gap-y-1 align-end">
      <div class="flex-shrink-0">
        <p style="font-size: 12px;">
          Criado por
          <a href="https://github.com/gabrielpastori1" target="_blank">
            Gabriel Pastori
          </a>
        </p>
        <v-btn
          @click="contribute"
          variant="tonal"
          size="small"
          color="light-blue-lighten-2"
        >
          <v-icon start>mdi-hand-coin</v-icon>
          Contribua com o projeto
        </v-btn>
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
</template>

<script>
import Contribute from "@/components/modal/Contribute.vue";

export default {
  name: "AppFooter",
  data: () => ({
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
        icon: "mdi-book-open-page-variant",
        url: "https://doc.evolution-api.com/help-center",
      },
    ],
  }),
  methods: {
    contribute() {
      this.$refs.contribute.open();
    },
  },
  components: { Contribute },
};
</script>

<style></style>
