import axios from "axios";

const api = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Eduardo0118/fakeapi-teste",
});

export default api;
