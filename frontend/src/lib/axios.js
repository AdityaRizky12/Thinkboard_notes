import axios from 'axios'
//in produciton ,there's no localhoast so we have to make dynamic
const BASE_URL = import.meta.env.MODE === 'develoment' ? 'http://localhost:5001/api' : 'api'
const api = axios.create({
    baseURL : BASE_URL
})

export default api