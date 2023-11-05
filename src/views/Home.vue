<template>
  <div>
    <div class="d-flex mb-4 align-center">
      <h3>Instancias</h3>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="loading"
        @click="getInstances"
        icon
        variant="text"
        size="small"
        class="mr-2"
      >
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        variant="tonal"
        @click="addInstance"
        :disabled="loading"
      >
        <v-icon>mdi-plus</v-icon>
        <span class="ml-2">Instancia</span>
      </v-btn>
    </div>


    <v-data-table
      :headers="headers"
      :items="instances || []"
      :loading="loading"
      :items-per-page="10"
    >
    <template v-slot:no-data>
      <v-card v-if="!loading" variant="outlined">
        <v-card-text>
          <div class="text-center">
            <v-icon size="70">mdi-server-network-off</v-icon>
            <h3 class="mt-4">Nenhuma instância encontrada</h3>
          </div>
        </v-card-text>
      </v-card>
    </template>

    <template v-slot:item.instance.instanceName="{ item }">
      <b>{{ item.instance.instanceName }}</b>  
    </template>
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template v-slot:item.instance.status="{ item }">
        <v-chip
          :color="statusMapper[item.instance.status].color"
          :text-color="statusMapper[item.instance.status].textColor"
          size="small"
          label
        >
          <v-icon
            v-if="statusMapper[item.instance.status].icon"
            start
            size="small"
          >
            {{ statusMapper[item.instance.status].icon }}
          </v-icon>
          {{ statusMapper[item.instance.status].text }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          :disabled="loading"
          :to="`/${item.instance.instanceName}`"
          icon
          variant="text"
          size="small"
          class="mr-2"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <!-- <v-btn
          :disabled="loading"
          @click="AppStore.selectInstance(item.instance)"
          icon
          variant="text"
          size="small"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn> -->
      </template>
    </v-data-table>

    <v-alert v-if="error" type="error">
      {{ error }}
    </v-alert>
  </div>
  <CreateInstance ref="createInstanceModal" />
</template>

<script>
import { useAppStore } from "@/store/app";
import CreateInstance from "@/components/modal/CreateInstance";
import statusMapper from "@/helpers/mappers/status";

export default {
  name: "HomeInstance",
  components: {
    CreateInstance,
  },
  data: () => ({
    AppStore: useAppStore(),
    loading: false,
    error: false,
    statusMapper: statusMapper,
    headers: [
      {
        title: "Nome",
        align: "start",
        sortable: true,
        key: "instance.instanceName",
      },
      { title: "Status", key: "instance.status" },
      { title: "Ações", key: "actions", sortable: false , align: "center"},
    ],
  }),
  methods: {
    addInstance() {
      this.$refs.createInstanceModal.open();
    },
    async getInstances() {
      try {
        this.loading = true;
        this.instances = await this.AppStore.reconnect();
      } catch (e) {
        this.error = e.message?.message || e.message || e;
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {},
  computed: {
    instances() {
      return this.AppStore.instances;
    },
  },
  mounted() {
  },
};
</script>
