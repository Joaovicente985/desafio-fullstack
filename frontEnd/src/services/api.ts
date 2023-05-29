import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-fullstack-bgky.onrender.com",
  timeout: 5000,
});

export { api };
