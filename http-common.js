import axios from "axios";
/* build test */
export default axios.create({
  baseURL: "http://192.168.0.4:3000/api",
  // baseURL: "http://54.180.109.57:3000/api",
  headers: {    "Content-type": "application/json"
  }
});