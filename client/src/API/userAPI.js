import axios from "axios";

let token = localStorage.getItem("token");

const userAPI = axios.create({
  baseURL: "http://localhost:5000/api/user/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "x-auth-token": token,
  },
});

export default userAPI;
