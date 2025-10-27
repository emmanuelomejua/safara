import axios from 'axios';

const SERVER = axios.create({
    baseURL: 'http://localhost:8800/api/',
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json', 
    }
})

export default SERVER;
