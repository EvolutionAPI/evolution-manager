
import http from "../http-common";

const getAll = async (instanceName) => {
  return await http
    .get("/group/fetchAllGroups/:instance/?getParticipants=false", {
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
  getAll: getAll
}