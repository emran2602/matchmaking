import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://matchmaking-backend1.herokuapp.com',
})

export default instance;