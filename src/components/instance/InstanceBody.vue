<template>
  <v-tabs>
    <v-tab v-for="tab in tabs" :key="tab.id" :value="tab.id">
      <v-icon start>{{ tab.icon }}</v-icon>
      {{ tab.title }}
    </v-tab>
  </v-tabs>

  <v-window v-model="tab">
    <v-window-item v-for="tab in tabs" :key="tab.id" :value="tab.id" >
      <div class="d-flex flex-column gap-8">

        <component
        v-for="component in tab.components"
        :key="component"
        :is="component"
        :instance="instance"
        />
      </div>
    </v-window-item>
  </v-window>
</template>

<script>
import Webhook from "./settings/Webhook.vue";
import Websocket from "./settings/Websocket.vue";
import Rabbitmq from "./settings/Rabbitmq.vue";
import Chatwoot from "./settings/Chatwoot.vue";
import Typebot from "./settings/Typebot.vue";

export default {
  components: {
    Webhook,
    Websocket,
    Rabbitmq,
    Chatwoot,
    Typebot,
  },
  data: () => ({
    tab: "settings",
    tabs: [
      {
        id: "settings",
        icon: "mdi-cog",
        title: "Configurações",
        components: ["Webhook", "Websocket", "Rabbitmq", "Chatwoot", "Typebot"],
      },
    ],
  }),
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
