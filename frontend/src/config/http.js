import axios from "axios";

const http = axios.create({
  baseURL: "http://backend.test/api/"
});

export { http }