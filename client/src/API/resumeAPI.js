import axios from "axios";

const resumeAPI = axios.create({
  baseURL: "http://localhost:5000/api/resume/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOjIsImF1dFR5cGUiOiJVU0VSIiwiaWF0IjoxNTg2MjA1MDg3LCJleHAiOjE1ODY4MDk4ODd9.q3f7k3fR0gh4lrF3aHj6Bt_b262irrTfdUk0LA1nWNc"
  }
});

export default resumeAPI;
