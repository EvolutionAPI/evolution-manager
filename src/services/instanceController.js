import http from "../http-common";


const fetchAll = async () => {
  return await http
    .get("/instance/fetchInstances")
    .then((r) => r.data)
    .catch((error) => {
      throw error.response?.data || error.response || error;
    });
};

const create = async (data) => {
  return await http
    .post("/instance/create", data)
    .then((r) => r.data)
    .catch((error) => {
      throw error.response?.data || error.response || error;
    });
}

const connect = async (instanceName) => {
  return await http
    .get("/instance/connect/:instance", {
      params: {
        instance: instanceName
      }
    })
    .then((r) => r.data)
    .catch((error) => {
      throw error.response?.data || error.response || error;
    });
}

const logout = async (instanceName) => {
  return await http
    .delete("/instance/logout/:instance", {
      params: {
        instance: instanceName
      }
    })
    .then((r) => r.data)
    .catch((error) => {
      throw error.response?.data || error.response || error;
    });
}

import settings from "./instanceSettingsController.js";


export default {
  fetchAll,
  create,
  connect,
  logout,
  ...settings

};
