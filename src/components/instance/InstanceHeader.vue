<template>
  <v-card
    variant="outlined"
    class="d-flex align-center gap-4 pa-2"
    rounded="xl"
  >
    <v-avatar size="100" rounded="xl">
      <v-icon
        v-if="
          instance.instance.status != 'open' &&
          statusMapper[instance.instance.status].icon
        "
        size="70"
      >
        {{ statusMapper[instance.instance.status].icon }}
      </v-icon>
      <v-img
        v-else
        :src="
          instance.instance.profilePictureUrl ||
          'https://cdn.vuetifyjs.com/images/lists/1.jpg'
        "
      />
    </v-avatar>
    <div class="d-flex flex-column">
      <span class="text-overline" style="line-height: 1em">
        {{ owner }}
      </span>
      <h2 class="mb-0">{{ instance.instance.instanceName }}</h2>
      <small>{{ instance.instance.profileStatus }}</small>
    </div>
    <v-spacer></v-spacer>
    <v-btn
      @click="disconnectInstance"
      :disabled="instance.instance.status === 'close'"
      :loading="disconnect.loading"
      variant="tonal"
      color="error"
      size="small"
    >
      <v-icon start>mdi-cellphone-nfc-off</v-icon>
      {{ disconnect.confirm ? "Tem Certeza?" : "Desconectar" }}
    </v-btn>
  </v-card>
</template>

<script>
import { useAppStore } from "@/store/app";
import statusMapper from "@/helpers/mappers/status";
import instanceController from "@/services/instanceController";

export default {
  name: "InstanceHeader",
  data: () => ({
    disconnect: {
      confirm: false,
      loading: false,
    },
    statusMapper: statusMapper,
    AppStore: useAppStore(),

  }),
  methods: {
    async disconnectInstance() {
      if (!this.disconnect.confirm) return (this.disconnect.confirm = true);

      this.disconnect.loading = true;
      try {
        this.disconnect.confirm = false;
        await instanceController.logout(this.instance.instance.instanceName);
        await this.AppStore.reconnect();
      } catch (e) {
        console.log(e);
        alert(e.message || e.error || "Erro desconhecido");
      } finally {
        this.disconnect.loading = false;
      }
    },
  },
  computed: {
    owner() {
      if (!this.instance?.instance?.owner)
        return (
          this.statusMapper[this.instance.instance.status]?.text ||
          "Desconhecido"
        );
      return (this.instance?.instance?.owner || "").split("@")[0];
    },
  },
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
