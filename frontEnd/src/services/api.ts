import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-fullstack-bgky.onrender.com",
  timeout: 7000,
});

export { api };
