import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDU4YTBjOGExMjMzMGFjNTI5MWNlYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTU5NTgxNSwiZXhwIjoxNjQ5ODU1MDE1fQ.xLTTFWOV_cYzv_HhJkfE8CDIUimmf-lnEw0-Yzoq7_U"

export const publicRequest = axios.create({
    baseURL:BASE_URL 
});



export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})