import axios from "axios";

export function getDoctorList() {
    axios.get('./API/test.json')
        .then((res) => {
            console.log(res.data.responseData)
            return res.data.responseData
        }).catch((err) => {
            console.log(err);
        })
}


export function isNull(data) {
    return data === null || data === undefined ? true : false
}