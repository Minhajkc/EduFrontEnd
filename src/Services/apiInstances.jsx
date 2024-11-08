import axios from "axios";

const StudentInstance = axios.create({
    baseURL: "https://eduserver-04u2.onrender.com/api",
    headers: {
        "Content-Type": "application/json", 
        },
        timeout: 10000,
        withCredentials: true
})




const MentorInstance = axios.create({
    baseURL: "https://eduserver-04u2.onrender.com/api/Mentor",
    headers: {
        'Content-Type': 'multipart/form-data'
      },
        timeout: 10000,
        withCredentials: true     
})

const AdminInstance = axios.create({
    baseURL: "https://eduserver-04u2.onrender.com/api/Admin",
    
        timeout:120000,
        withCredentials: true  
})

export { StudentInstance, MentorInstance, AdminInstance };