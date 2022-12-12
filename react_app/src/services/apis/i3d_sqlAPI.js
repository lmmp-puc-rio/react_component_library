import axios from "axios";



// Create axios instance, with specif request props(headers, auth, body, etc...)
export default axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
});