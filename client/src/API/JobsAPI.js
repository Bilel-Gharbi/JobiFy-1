import axios from "axios";

const JobsAPI = axios.create({
  baseURL: "http://localhost:5000/api/job",
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
});

export default JobsAPI;
