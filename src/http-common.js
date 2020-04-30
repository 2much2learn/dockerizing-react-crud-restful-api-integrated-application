import axios from "axios";

export default axios.create({
  baseURL: window._env_.API_URL,
  headers: {
    "Content-type": "application/json"
  }
});