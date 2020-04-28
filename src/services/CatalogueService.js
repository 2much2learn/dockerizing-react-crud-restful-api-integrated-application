import http from "../http-common";

const getAll = () => {
  return http.get("/");
};

const get = sku => {
  return http.get(`/${sku}`);
};

const create = data => {
  return http.post("/", data);
};

const update = (sku, data) => {
  return http.put(`/${sku}`, data);
};

const remove = sku => {
  return http.delete(`/${sku}`);
};


export default {
  getAll,
  get,
  create,
  update,
  remove,
};