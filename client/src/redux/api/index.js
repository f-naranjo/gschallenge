import axios from 'axios';

export default function fetchProducts() {
    return axios.get(`${process.env.REACT_APP_API_URL}/phones`)
}