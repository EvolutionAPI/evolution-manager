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
  instance: "Instância | Instâncias",
  search: "Pesquisar",
  loading: "Carregando",
  noInstances: "Nenhuma instância encontrada",
  unknown: "Desconhecido",
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
  }
}