// src/i18n/en.js
import { en } from 'vuetify/locale'

export default {
  $vuetify: { ...en },
  all: "All",
  close: "Close",
  cancel: "Cancel",
  restart: "Restart",
  restarted: "Restarted",
  refresh: "Refresh",
  disconnect: "Disconnect",
  sure: "Sure?",
  save: "Save",
  instance: "Instance | Instances",
  search: "Search",
  loading: "Loading",
  noInstances: "No instances found",
  unknown: "Unknown",
  required: "{field} is required",
  maxLength: "{field} must have a maximum of {length} characters",
  https: "{field} must start with https://",
  httpHttps: "{field} must start with http:// or https://",
  enabled: "Enabled",
  events: "Events",
  name: "Name",
  version: {
    availableFrom: "Available from version {version}",
  },
  status: {
    close: "Disconnected",
    connecting: "Connecting",
    open: "Connected",
  },
  about: {
    title: "About",
    version: "Version",
  },
  contribute: {
    title: "Contribute",
    via: "Contribute via",
    button: "Contribute",
  },
  connection: {
    title: "Configure connection",
    action: "Connect",
    saved: "Connection saved | Connections saved",
  },
  instanceTabs: {
    settings: "Settings",
    message: "Messages",
    profile: "Profile",
  },
  connectPhone: {
    title: "Phone not connected",
    apiGenericError: "Could not load QR Code, if the error persists, restart the API and try again."
  },
  options: {
    title: "Behavior",
    rejectCall: "Reject call",
    msgCall: "Rejection message",
    groupsIgnore: "Ignore groups",
    alwaysOnline: "Always online",
    readMessages: "Mark messages as read",
    readStatus: "Mark status as seen",
  },
  webhook: {
    byEvents: "Webhook by events",
    byEventsHelp: "Adds the event name at the end of the URL (ex: /webhook/event_name )",
  },
  rabbitmq: {
    info: "RabbitMQ is used by the API to queue notifications. It is NOT used to send messages."
  },
  chatwoot: {
    account_id: "Account ID",
    token: "Account Token",
    signMsg: "Sign messages",
    signMsgHelp: "Adds the agent name at the first line of the message",
    signDelimiter: "Signature delimiter",
    signDelimiterHelp: "Delimiter used to separate the signature from the message (\\n for line break)",
    reopenConversation: "Reopen conversation",
    reopenConversationHelp: "Reopens the customer's conversation when he starts a new conversation instead of creating a new conversation",
    conversationPending: "Start conversation as pending",
    conversationPendingHelp: "Starts the conversation as pending instead of open",
    autoCreate: "Create Inbox",
    autoCreateHelp: "Creates the inbox in Chatwoot if it doesn't exist",
  },
  typebot: {
    typebot: "Typebot flow name",
    typebotHelp: "The name of the Typebot flow to be used",
    keywordFinish: "Finish keyword",
    keywordFinishHelp: "Keyword to finish the flow",
    expire: "Expiration time (in minutes)",
    expireHelp: "Time to end the session if there is no interaction",
    delayMessage: "Message typing time",
    delayMessageUnit: "in milliseconds",
    delayMessageHelp: "Typing simulation time",
    unknownMessage: "Unknown message format",
    unknownMessageHelp: "Message sent when the message format is not recognized",
    listeningFromMe: "Listen to messages sent by me",
    listeningFromMeHelp: "Sends the messages sent by you to the Typebot flow",
    session: {
      title: "Typebot sessions",
      btn: "See 0 sessions | See one session | See {count} sessions",
      noData: "No sessions found",
      headers: {
        variable: "Variables",
        createdAt: "Started at",
        updatedAt: "Last message",
      }
    },
    status: {
      opened: "Open",
      paused: "Paused",
      closed: "Closed",
    }
  },
  sendMessage: {
    title: "Send message",
    to: "To",
    noContacts: "No contacts",
    message: "Message",
    presence: "Presence",
    delay: "Delay",
    delayHelp: "Delay in milliseconds",
    send: "Send",
    success: "Message sent successfully | Messages sent successfully",
  },
  phoneHasWhatsApp: {
    title: "Has WhatsApp?",
    phone: "WhatsApp number",
    verify: "Verify",
    exists: "WhatsApp found",
    notExists: "WhatsApp not found",
    invalid: "Invalid number",
  },
  contacts: {
    title: "My contacts",
  },
  groups: {
    title: "My groups",
    headers: { creation: "Created at", }
  },
  chats: {
    title: "My chats",
    headers: { lastMsgTimestamp: "Last message", }
  },
  profile: {
    title: "Name and Status",
    name: "Name",
    status: "Status"
  },
  profilePicture: {
    title: "Profile Picture",
    noPhoto: "No profile photo",
    upload: "Select Photo",
    remove: "Remove Photo",
  },
  privacy: {
    title: "Privacy",
    lastSeen: "Last Seen",
    online: "Online",
    profilePhoto: "Profile Photo",
    status: "Status",
    readreceipts: "Read Receipts",
    groupadd: "Be Added to Groups",
    options: {
      all: "Everyone",
      contacts: "My Contacts",
      contactBlacklist: "My Contacts, Except Blacklisted",
      matchLastSeen: "Match Last Seen",
      none: "Nobody",
    }
  }
}