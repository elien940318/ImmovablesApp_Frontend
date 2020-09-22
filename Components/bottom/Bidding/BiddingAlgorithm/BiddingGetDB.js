import http from "../../../../http-common";

export const get1 = () =>{
    http.get(`/board/getPost`)
    .then(response => {
        console.log(response.data)
        return response.data
    })
    .catch(error => {
        console.log(error);
        return error
})}
