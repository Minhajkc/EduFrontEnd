import axios from "axios";

const StudentInstance = axios.create({
    baseURL: "https://eduserver-04u2.onrender.com",
    headers: {
        "Content-Type": "application/json", 
        },
        timeout: 10000,
        withCredentials: true
})




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