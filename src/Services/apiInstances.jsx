import axios from "axios";

const StudentInstance = axios.create({
    baseURL: "https://eduserver-04u2.onrender.com",
    headers: {
        "Content-Type": "application/json", 
        },
        timeout: 10000,
        withCredentials: true
})


StudentInstance.interceptors.request.use(
    (config) => {
        // Add these headers to every request
        config.headers = {
            ...config.headers,
            'Access-Control-Allow-Credentials': true,
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor to handle errors and cookie-related issues
StudentInstance.interceptors.response.use(
    (response) => {
        console.log('Response Headers:', response.headers);
        return response;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

const MentorInstance = axios.create({
    baseURL: "https://eduserver-04u2.onrender.com/Mentor/",
    headers: {
        'Content-Type': 'multipart/form-data'
      },
        timeout: 10000,
        withCredentials: true     
})

const AdminInstance = axios.create({
    baseURL: "https://eduserver-04u2.onrender.com/Admin/",
    
        timeout:120000,
        withCredentials: true  
})

export { StudentInstance, MentorInstance, AdminInstance };