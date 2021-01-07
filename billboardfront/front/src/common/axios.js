import axios from "axios";
import { baseURL } from "./config";

axios.defaults.baseURL = baseURL;
//
// export async function get(path) {
//     const response = await axios.get(path);
//     return response ;
// }


export function get(path) {
        return axios.get(path).then(response => response.data);
}

export function post(path, data) {
        axios({
                method: 'post',
                url: path,
                data: data,
        });
}