import { useEffect, useState } from 'react';
import { getClient } from '../services/dataServices';
import { useNavigate } from 'react-router-dom';

const ShowClient = (props) => {
    const navigate = useNavigate(); 
    const [client, setClient] = useState([]);

    const clientUrl = props.clientUrl

    useEffect(() => {
        console.log('Client to edit:', client)
    }, [client]);

    useEffect(() => {
        const loadData = async () => {
            const data = await (getClient(clientUrl))
            setClient(data)
        }
        loadData()
    }, []);

    const loaded = () => {
        return (
            <main>
                <section>
                    <h1>Clients:</h1>
                            <>
                            <h2>Client Name: {client.client_name}</h2>
                            <h3>Location: {client.location}</h3>
                            <h3>Phone No: {client.phone}</h3>
                            <h3>Gate Code: {client.gate_code}</h3>
                            <h3>Comments: {client.coments}</h3>
                            <button onClick={() => navigate(`/edit`)}>Edit</button>
                            </>
                </section>
            </main>
        )
    }
    const loading = () => {
        return(<h2>Loading...</h2>)
    }

    return(
        <div>
            {client ? loaded() : loading()}
        </div>
    )
}

export default ShowClient;