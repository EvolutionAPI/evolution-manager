
import http from "../http-common";

const getAll = async (instanceName) => {
  return await http
    .get("/chat/findChats/:instance", {
      params: {
        instance: instanceName
      }
    })
    .then((r) => r.data)
    .catch((error) => {
      throw error.response?.data || error.response || error;
    });
}

const hasWhatsapp = async (instanceName, numbers) => {
  return await http
    .post("/chat/whatsappNumbers/:instance", { numbers }, {
      params: {
        instance: instanceName
      }
    })
    .then((r) => r.data)
    .catch((error) => {
      throw error.response?.data || error.response || error;
    });
}
const getContacts = async (instanceName, numbers) => {
  return await http
    .post("/chat/findContacts/:instance", { numbers }, {
      params: {
        instance: instanceName
      }
    })
    .then((r) => r.data)
    .catch((error) => {
      throw error.response?.data || error.response || error;
    });
}

export default {
  getAll: getAll,
  hasWhatsapp: hasWhatsapp,
  getContacts: getContacts
}