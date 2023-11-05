<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-btn variant="text" @click="$router.push('/')">
        <v-img src="@/assets/logo.png" height="24" width="24" class="mr-2" />
        Evolution Manager
      </v-btn>
    </v-app-bar-title>

    <v-icon v-if="AppStore.validConnection" color="success">
      mdi-check-circle
    </v-icon>
    <v-icon v-else color="error"> mdi-alert-circle </v-icon>
    <v-btn @click="openSettings" icon>
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>
  <SettingsModal ref="settings" />
</template>

<script>
import SettingsModal from "@/components/modal/Settings.vue";
import { useAppStore } from "@/store/app";

export default {
  name: "AppBar",
  data: () => ({
    AppStore: useAppStore(),
  }),
  components: {
    SettingsModal,
  },
  methods: {
    openSettings() {
      this.$refs.settings.open();
    },
  },
  async mounted() {
    await this.AppStore.loadConnection();
    if (!this.AppStore.validConnection) this.openSettings();
  },
};
</script>
