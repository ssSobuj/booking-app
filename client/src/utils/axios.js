import axios from "axios";

const instance = axios.create({
  baseUrl: "mongodb://localhost:27017",
});

export default instance;
