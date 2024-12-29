import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL

export const fetchClients = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/clientlogs/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data
    } catch (err) {
        console.log('Error:', err);
        return err
    }
};

export const createClient = async (formdata) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/clientlogs/`, formdata, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data
    } catch (err) {
        console.log('Error:', err);
        return err
    }
}

export const getClient = async (url) => {
    try {
        const response = await axios.get(`${url}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log('Error:', err);
        return err
    }
}

export const editClient = async (formdata, url) => {
    try {
        const response = await axios.put(`${url}`, formdata, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return console.log('Edited Item', response.data)
    } catch (err) {
        console.log('Error:', err);
        return err
    }
}

export const deleteClient = async (url) => {
    try {
        const response = await axios.delete(`${url}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log('Error:', err);
        return err
    }
}