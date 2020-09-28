import axios from "axios";
/* build test */
export default axios.create({
  baseURL: "http://192.168.0.2:3000/api",
  // baseURL: "http://54.180.109.57:3000/api",
  headers: new Headers({
    "Content-type": "application/json",
    'Content-Type': 'application/x-www-form-urlencoded', //Specifying the Content-Type
  }),
});
export const connAPI = 'http://192.168.0.2:3000/api'
// export const connAPI = "http://54.180.109.57:3000/api"