import axios from "axios"

const reserveApi = axios.create({
    baseURL: 'https://taperiarondenia-default-rtdb.firebaseio.com/'
})

export default reserveApi