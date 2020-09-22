import http from "../../../../http-common";

export async function get1(){
    await http.get(`/board/getPost`)
    .then(response => {
        //console.log(response.data)
        return response.data
    })
    .catch(error => {
        console.log(error);
        return error
})}
