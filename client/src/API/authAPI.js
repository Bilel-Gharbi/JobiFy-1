import axios from "axios";

const authAPI = axios.create({
  baseURL: "http://localhost:5000/auth",
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
});

export default authAPI;
