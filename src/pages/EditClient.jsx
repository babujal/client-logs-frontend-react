import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editClient } from "../services/dataServices";
import { getClient } from "../services/dataServices";
import { deleteClient } from "../services/dataServices";
import './EditClient.css'

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
        <main className='page'>
            <h1>Edit</h1>
            <p>{errMessage}</p>

            <form onSubmit={handleSubmit} className="editForm">
                <div>
                    Client Name: <br/>
                    <input
                        type="text"
                        name="client_name"
                        value={client.client_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Phone: <br/>
                    <input
                        type="text"
                        name="phone"
                        value={client.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Location Address: <br/>
                    <input
                        type="text"
                        name="location"
                        value={client.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Gate's Code: <br/>
                    <input
                        type="text"
                        name="gate_code"
                        value={client.gate_code}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Coments: <br/>
                    <textarea
                        type="text"
                        name="coments"
                        value={client.coments}
                        onChange={handleChange}
                    />
                </div>
                <div className="formFooter">
                    <button type="submit" onClick={() => navigate('/')}>Submit</button>
                    <button onClick={() => handleClick()}>Delete</button>
                </div>
            </form>
            <button className="btn" onClick={() => navigate('/')}>Back</button>
        </main>
    )
}

export default EditClient