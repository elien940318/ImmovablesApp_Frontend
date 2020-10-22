import axios from "axios";
/* build test */
export default axios.create({
<<<<<<< HEAD
  baseURL: "http://192.168.10.5:3000/api",
  // baseURL: "http://54.180.109.57:3000/api",
=======
  // baseURL: "http://192.168.0.12:3000/api",
  baseURL: "http://54.180.109.57:3000/api",
>>>>>>> 9068f02b4062fb4a0d7c6aac413b5069deea5981
  headers: new Headers({
    "Content-type": "application/json",
    'Content-Type': 'application/x-www-form-urlencoded', //Specifying the Content-Type
  }),
});
<<<<<<< HEAD
export const connAPI = 'http://192.168.10.5:3000/api'
// export const connAPI = "http://54.180.109.57:3000/api"
=======
// export const connAPI = 'http://192.168.0.12:3000/api'
export const connAPI = "http://54.180.109.57:3000/api"
>>>>>>> 9068f02b4062fb4a0d7c6aac413b5069deea5981
