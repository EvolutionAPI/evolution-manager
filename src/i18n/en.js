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
  step: "Passo {step}",
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
  toggleSelect: {
    all: "Select all",
    none: "Deselect all",
  },
  about: {
    title: "About",
    description: "Evolution Manager makes it easy to manage your APIs with an intuitive interface. It was created by independent developers, focusing on improving the user experience and administration of API functionalities.",
    contribute: "Contribute to the project",
    dataProcess: {
      title: "Data Processing",
      description: "Data processing and storage occur <b>locally</b> in your browser, without the use of a centralized backend. This reinforces security and privacy, keeping your confidential information protected.",
      https: "Due to all processing being done in the browser, it is necessary to access the Evolution API server through a secure connection (HTTPS)."
    },
    version: "Version",
  },
  createInstance: {
    title: "Create instance",
    name: "Instance name",
    configInfo: "The WebHook, WebSocket, RabbitMQ, Chatwoot, and Typebot can be configured after creating the instance.",
    integration: "Integration",
    number: "Telephone number identifier",
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
    apiGenericError: "Could not load QR Code, if the error persists, restart the API and try again.",
    qr: "QR Code",
    code: "Código",
  },
  options: {
    title: "Behavior",
    rejectCall: "Reject call",
    msgCall: "Rejection message",
    groupsIgnore: "Ignore groups",
    alwaysOnline: "Always online",
    readMessages: "Mark messages as read",
    readStatus: "Mark status as seen",
    syncfullhistory: "sync full history",
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
    dayslimitimportmessages: "Days limit to import messages",
    nameInbox: "Inbox name",
    nameInboxHelp: "Inbox name to be used in Chatwoot. If not provided, it will default to the session name.",
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
    mergeBrasilianContacts: "Merge Brazilian contacts",
    mergeBrasilianContactsHelp: "If there are two contacts with the same number, one with the ninth digit and the other without it, they will be merged; valid only for Brazilian numbers.",
    importcontacts: "Import contacts",
    importcontactsHelp: "Import contacts to Chatwoot",
    importmessages: "Import messages",
    importmessagesHelp: "Import message history messages to Chatwoot",
    config: {
      btn: "How to configure Chatwoot?",
      title: "How to configure Chatwoot inbox?",
      fullDoc: "View full documentation",
      steps: {
        "1": "Access settings > Inbox and click on \"Add Inbox\"",
        "2": "Select \"API\" as the inbox type",
        "3": "Fill in the inbox name and webhook. The values should be exactly as follows:",
        "4": "Add agents to the inbox.",
        "5": "Done! Now you can receive messages.",
      }
    }
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
    unknownMessagePlaceholder: "Leave blank to not send message",
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