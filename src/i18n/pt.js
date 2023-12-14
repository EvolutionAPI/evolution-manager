// src/i18n/pt.js
import { pt } from 'vuetify/locale'

export default {
  $vuetify: { ...pt },
  all: "Todo | Todos",
  close: "Fechar",
  cancel: "Cancelar",
  restart: "Reiniciar",
  restarted: "Reiniciada",
  refresh: "Atualizar",
  disconnect: "Desconectar",
  sure: "Tem certeza?",
  save: "Salvar",
  instance: "Instância | Instâncias",
  search: "Pesquisar",
  loading: "Carregando",
  noInstances: "Nenhuma instância encontrada",
  unknown: "Desconhecido",
  required: "{field} é obrigatório",
  https: "{field} deve começar com https://",
  httpHttps: "{field} deve começar com http:// ou https://",
  enabled: "Habilitado",
  events: "Eventos",
  version: {
    availableFrom: "Disponível a partir da versão {version}",
  },
  status: {
    close: "Desconectado",
    connecting: "Conectando",
    open: "Conectado",
  },
  about: {
    title: "Sobre",
    version: "Versão",
  },
  contribute: {
    title: "Contribuir",
    via: "Contribua via",
    button: "Contribua",
  },
  connection: {
    title: "Configurar conexão",
    action: "Conectar",
    saved: "Conexão salva | Conexões salvas",
  },
  instanceTabs: {
    settings: "Configurações",
    message: "Mensagens",
    profile: "Perfil",
  },
  connectPhone: {
    title: "Telefone não conectado",
    apiGenericError: "Não foi possível carregar o QR Code, se o erro persistir, reinicie a API e tente novamente."
  },
  options: {
    title: "Comportamento",
    rejectCall: "Rejeitar chamada",
    msgCall: "Mensagem de rejeição",
    groupsIgnore: "Ignorar grupos",
    alwaysOnline: "Sempre online",
    readMessages: "Marcar mensagens como lidas",
    readStatus: "Marcar status como visto",
  },
  webhook: {
    byEvents: "Webhook por eventos",
    byEventsHelp: "Adiciona o nome do evento no final da URL (ex: /webhook/event_name )",
  },
  rabbitmq: {
    info: "O RabbitMQ é utilizado pela API para o enfileiramento das notificações. Ele NÃO é utilizado para o envio de mensagens."
  },
  chatwoot: {
    account_id: "ID da conta",
    token: "Token da conta",
    signMsg: "Assinar mensagens",
    signMsgHelp: "Adiciona o nome do atendente na primeira linha da mensagem",
    reopenConversation: "Reabrir conversa",
    reopenConversationHelp: "Reabre a conversa do cliente quando ele inicia uma nova conversa em vez de criar uma nova conversa",
    conversationPending: "Iniciar conversa como pendente",
    conversationPendingHelp: "Inicia a conversa como pendente ao invés de aberta",
    autoCreate: "Criar Caixa de Entrada",
    autoCreateHelp: "Cria a caixa de entrada no Chatwoot caso ela não exista",
  },
  typebot: {
    typebot: "Nome do fluxo do Typebot",
    typebotHelp: "O nome do fluxo do Typebot que será utilizado",
    keywordFinish: "Palavra-chave de finalização",
    keywordFinishHelp: "Palavra-chave para finalizar o fluxo",
    expire: "Tempo de expiração (em minutos)",
    expireHelp: "Tempo para encerrar a sessão caso não haja interação",
    delayMessage: "Tempo de digitação da mensagem",
    delayMessageUnit: "em milisegundos",
    delayMessageHelp: "Tempo de simulação de digitação",
    unknownMessage: "Mensagem formato desconhecido",
    unknownMessageHelp: "Mensagem enviada quando o formato da mensagem não é reconhecido",
    listeningFromMe: "Ouvir mensagens enviadas por mim",
    listeningFromMeHelp: "Envia as mensagens enviadas por você para o fluxo do Typebot",
    session: {
      title: "Sessões do Typebot",
      btn: "Ver 0 sessões | Ver uma sessão | Ver {count} sessões",
      noData: "Nenhuma sessão encontrada",
      headers: {
        variables: "Variáveis",
        createdAt: "Iniciada em",
        updatedAt: "Última mensagem",
      }
    },
    status: {
      opened: "Aberto",
      paused: "Pausado",
      closed: "Fechado",
    }
  }
}