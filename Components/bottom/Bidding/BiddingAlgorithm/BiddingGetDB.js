import http from "../../../../http-common";

export default {

    get1(){
        http.get(`/board/getPost`)
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.log(error);
            return error
        })
    },

    get2(){
        http.get(`/board/getPost2`)
        .then(response => {
            DBdata2 = response.data
        })
        .catch(error => {
            console.log(error);
        })
        return DBdata2
    }
}
