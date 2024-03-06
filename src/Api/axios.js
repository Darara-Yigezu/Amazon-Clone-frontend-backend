import axios from 'axios';

const axiosInstance=axios.create({
    baseURL: "http://127.0.0.1:5001/clone-8c1a1/us-central1/api" , // Replace with your API endpoint
});

export {axiosInstance};// Function to make HTTP GET Requests  