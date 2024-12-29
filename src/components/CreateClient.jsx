import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "../services/dataServices";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const CreateClient = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        client_name: '',
        phone: '',
        location: '',
        gate_code: '',
        coments: ''
    });
    const [errMessage, setErrMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData, //The existing formdata's data
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //call our backend to create the user and save the token
            const postResponse = await createClient(formData);
            console.log('Created Client:', postResponse.data)
            //navigate the user to the logged page
            navigate('/')
        }catch(err){
            setErrMessage(err.message)
        }
    }

    return (
        <main>
            <h1>Sign Up</h1>
            <p>{errMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    Client Name:
                    <input
                        type="text"
                        name="client_name"
                        value={formData.client_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Location Address:
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Gate's Code:
                    <input
                        type="text"
                        name="gate_code"
                        value={formData.gate_code}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Coments:
                    <input
                        type="text"
                        name="coments"
                        value={formData.coments}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Create</button>
                    <button onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    )
}

export default CreateClient