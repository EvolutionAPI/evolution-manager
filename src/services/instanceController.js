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


export default {
  fetchAll,
  create
};
