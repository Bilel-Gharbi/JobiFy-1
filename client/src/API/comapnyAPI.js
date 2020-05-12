import axios from "axios";

let token = localStorage.getItem("token");

const companyAPI = axios.create({
  baseURL: "http://localhost:5000/api/company",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "x-auth-token": token,
  },
});

export default companyAPI;
