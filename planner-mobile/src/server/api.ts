import axios from "axios";

export const api = axios.create({
 baseURL: "http://192.168.2.107:3333",
})

// api port here, not your network port