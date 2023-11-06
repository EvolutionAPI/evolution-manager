<template>
  <v-tabs v-model="tab" background-color="transparent" color="primary">
    <v-tab v-for="tab in tabs" :key="tab.id" :value="tab.id">
      <v-icon start>{{ tab.icon }}</v-icon>
      {{ tab.title }}
    </v-tab>
  </v-tabs>

  <v-window v-model="tab">
    <v-window-item v-for="tab in tabs" :key="tab.id" :value="tab.id">
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
import Options from "./settings/Options.vue";
import Webhook from "./settings/Webhook.vue";
import Websocket from "./settings/Websocket.vue";
import Rabbitmq from "./settings/Rabbitmq.vue";
import Chatwoot from "./settings/Chatwoot.vue";
import Typebot from "./settings/Typebot.vue";

import MyGroups from "./message/MyGroups.vue";
import MyChats from "./message/MyChats.vue";
import HasWhatsapp from "./message/HasWhatsapp.vue";
export default {
  components: {
    Options,
    Webhook,
    Websocket,
    Rabbitmq,
    Chatwoot,
    Typebot,
    MyGroups,
    MyChats,
    HasWhatsapp,
  },
  data: () => ({
    tab: "settings",
    tabs: [
      {
        id: "settings",
        icon: "mdi-cog",
        title: "Configurações",
        components: ["Options","Webhook", "Websocket", "Rabbitmq", "Chatwoot", "Typebot"],
      },
      {
        id: "message",
        icon: "mdi-message",
        title: "Mensagens",
        components: ["HasWhatsapp","MyGroups", "MyChats"],
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
