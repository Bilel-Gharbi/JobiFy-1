import axios from "axios";

let token = localStorage.getItem("token");

const resumeAPI = axios.create({
  baseURL: "http://localhost:5000/api/resume/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "x-auth-token": token
  }
});

export default resumeAPI;
