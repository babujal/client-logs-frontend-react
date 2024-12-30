import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editClient } from "../services/dataServices";
import { getClient } from "../services/dataServices";
import { deleteClient } from "../services/dataServices";

const EditClient = (props) => {
    const navigate = useNavigate();
    const clientUrl = props.clientUrl

    const [client, setClient] = useState([]);
    
    useEffect(() => {
        const loadData = async () => {
            const data = await (getClient(clientUrl))
            setClient(data)
        }
        loadData()
    }, []);

    useEffect(() => {
        console.log('Client to edit:', client)
    }, [client]);


    const [errMessage, setErrMessage] = useState('');

    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //call our backend to create the user and save the token
            const postResponse = await editClient(client, clientUrl);
            console.log('Created Client:', postResponse.data)
            //navigate the user to the logged page
            navigate('/show')
        } catch (err) {
            setErrMessage(err.message)
        }
    }

    const handleClick = () => {
        deleteClient(clientUrl)
        navigate('/')
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
                        value={client.client_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={client.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Location Address:
                    <input
                        type="text"
                        name="location"
                        value={client.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Gate's Code:
                    <input
                        type="text"
                        name="gate_code"
                        value={client.gate_code}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Coments:
                    <input
                        type="text"
                        name="coments"
                        value={client.coments}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button onClick={() => handleClick()}>Delete</button>
                    <button onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    )
}

export default EditClient