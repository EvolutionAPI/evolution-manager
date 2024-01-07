<template>
  <v-select
    :items="events"
    v-model="val"
    :disabled="disabled"
    :label="$t('events')"
    hide-details
    class="mb-3"
    multiple
    outlined
    dense
    chips
  >
    <template v-slot:prepend-item>
      <v-list-item ripple @mousedown.prevent @click="toggle">
        <div class="d-flex align-center gap-x-2 px-2">
          <v-icon :class="this.val.length ? '' : 'text-medium-emphasis'">
            {{ icon }}
          </v-icon>
          <v-list-item-title class="text-uppercase">
            {{ $t(`toggleSelect.${allSelected ? "none" : "all"}`) }}
          </v-list-item-title>
        </div>
      </v-list-item>
      <v-divider class="my-2"></v-divider>
    </template>
  </v-select>
</template>

<script>
const EVENTS = () => [
  "APPLICATION_STARTUP",
  "QRCODE_UPDATED",
  "MESSAGES_SET",
  "MESSAGES_UPSERT",
  "MESSAGES_UPDATE",
  "MESSAGES_DELETE",
  "SEND_MESSAGE",
  "CONTACTS_SET",
  "CONTACTS_UPSERT",
  "CONTACTS_UPDATE",
  "PRESENCE_UPDATE",
  "CHATS_SET",
  "CHATS_UPSERT",
  "CHATS_UPDATE",
  "CHATS_DELETE",
  "GROUPS_UPSERT",
  "GROUP_UPDATE",
  "GROUP_PARTICIPANTS_UPDATE",
  "CONNECTION_UPDATE",
  "CALL",
  "NEW_JWT_TOKEN",
];

export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    events: {
      type: Array,
      default: EVENTS,
    },
  },
  computed: {
    icon() {
      if (this.allSelected) return "mdi-checkbox-marked";
      if (this.val.length) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
    val: {
      get() {
        return this.modelValue;
      },
      set(val) {
        console.log(val);
        this.$emit("update:modelValue", val);
      },
    },
    allSelected() {
      return this.val.length === this.events.length;
    },
  },
  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.allSelected) this.val = [];
        else this.val = EVENTS();
      });
    },
  },
};
</script>
