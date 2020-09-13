import axios from "axios";
/* build test */
export default axios.create({
  baseURL: "http://54.180.109.57:3000/api",
  headers: {    "Content-type": "application/json"
  }
});