import axios from 'axios';

const fetching = axios.create({
    baseURL:'http://localhost:8000'
})

export default fetching;