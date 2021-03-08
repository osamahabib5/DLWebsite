var axios = require("axios");

var axiosInstance = axios.create({
  //baseURL: 'https://evalu.ca/evaluation/public/api/v1',
  //baseURL: "http://localhost:8000"
  baseUrl: "http://localhost:3000"
  /* other custom settings */
});

module.exports = axiosInstance;
