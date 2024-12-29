import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const signUp = async (formdata) => {
    try {
        const res = await axios.post(`${(BASE_URL)}/register/`, formdata, {
            headers: {'Content-Type': 'application/json'}
        })
        const json = await axios.post(`${BASE_URL}/api/token/`,{
            username: formdata.username,
            password: formdata.password
        })
        console.log('Json received in signup:', json.data)

        localStorage.setItem('token', json.data.access)
        return json;
    } catch (err) {
        console.error("Error response:", err.response?.data);
    }
}

export const getUser = () => {
    const token = localStorage.getItem('token')
    console.log('Token from authServ:', token)
    if(!token) return null;
    return token;
}

export const signIn = async (formdata) => {
    try {
        const json = await axios.post(`${(BASE_URL)}/api/token/`, formdata, {
            headers: {'Content-Type': 'application/json'}
        })
        console.log('Json received in signin:', json.data)

        localStorage.setItem('token', json.data.access)
        return json;
    } catch (err) {
        console.error("Error response:", err.response?.data);
    }
}

export const signOut = async () => {
    localStorage.removeItem('token');
}