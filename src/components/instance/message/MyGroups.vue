<template>
  <v-card variant="outlined" :loading="loading">
    <v-card-title
      class="d-flex align-center"
      @click="toggleExpanded"
      style="cursor: pointer"
      v-ripple
    >
      <v-icon start>mdi-account-group</v-icon>
      Meus Grupos
      <v-spacer></v-spacer>
      <v-btn
        size="small"
        icon
        :disabled="loading"
        variant="tonal"
        @click.stop="toggleExpanded"
        :style="{ transform: expanded ? 'rotate(180deg)' : '' }"
      >
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text v-if="expanded">
      <v-alert v-if="error" type="error" class="mb-3">
        {{ error }}
      </v-alert>

      <v-text-field
        v-model="search"
        label="Pesquisar"
        outlined
        clearable
        variant="outlined"
        density="compact"
        hide-details
        class="mb-3"
      />

      <v-data-table
        :headers="[
          { title: 'Nome', value: 'subject' },
          { title: 'ID', value: 'id', align: 'center' },
          {
            title: 'Criado em',
            value: 'creation',
            align: 'center',
          },
        ]"
        :items="groups"
        :no-data-text="loading ? '' : 'Nenhum grupo encontrado'"
        :search="search"
        :rows-per-page-items="[5, 10, 25, 50, 100]"
        :items-per-page="5"
        class="elevation-0"
      >
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.id="{ item }">
          <v-chip size="x-small" outlined color="primary" @click="copy(item)">
            {{ item.id }}
            <v-icon
              size="14"
              class="ml-1"
              v-if="copied.includes(item.id)"
              color="primary"
            >
              mdi-check
            </v-icon>
            <v-icon size="14" class="ml-1" v-else color="primary">
              mdi-content-copy
            </v-icon>
          </v-chip>
        </template>

        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.creation="{ item }">
          {{ formatTimestamp(item.creation * 1000) }}
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import instanceController from "@/services/instanceController";

export default {
  name: "MyGroups",
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    expanded: false,
    loading: false,
    error: false,
    groups: [],
    copied: [],
    search: "",
  }),

  methods: {
    toggleExpanded() {
      if (this.loading) return;
      this.expanded = !this.expanded;
    },
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      return new Date(timestamp).toLocaleString();
    },
    copy(group) {
      if (this.copied.includes(group.id)) return;

      const el = document.createElement("textarea");
      el.value = group.id;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      this.copied.push(group.id);
      setTimeout(() => {
        this.copied = this.copied.filter((i) => i !== group.id);
      }, 2000);
    },
    async loadGroups() {
      try {
        this.loading = true;
        this.error = false;
        const groups = await instanceController.group.getAll(
          this.instance.instance.instanceName
        );

        this.groups = groups;
      } catch (e) {
        this.error = e.message?.message || e.message || e;
      } finally {
        this.loading = false;
      }
    },
  },

  watch: {
    expanded: {
      handler() {
        if (this.expanded) this.loadGroups();
      },
    },
  },
};
</script>

<style></style>
