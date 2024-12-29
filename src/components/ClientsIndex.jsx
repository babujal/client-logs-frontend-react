import { useEffect, useState } from 'react';
import { fetchClients } from '../services/dataServices';
import { useNavigate } from 'react-router-dom';

const ClientsIndex = (props) => {
    const navigate = useNavigate(); 
    const [clients, setClients] = useState([]);

    useEffect(() => {
        console.log('Clients found:', clients)
    }, [clients]);

    useEffect(() => {
        const loadData = async () => {
            const data = await (fetchClients())
            setClients(data)
        }
        loadData()
    }, []);

    const handleClick = (url) => {
        props.setClientUrl(url)
        navigate('/show')
    }

    const loaded = () => {
        return (
            <main>
                <section>
                    <h1>Clients:</h1>
                    {clients.map((client) => {
                        return(
                            <>
                            <h2>Client Name: {client.client_name}</h2>
                            <h3>Location: {client.location}</h3>
                            <h3>Phone No: {client.phone}</h3>
                            <h3>Gate Code: {client.gate_code}</h3>
                            <h3>Coments: {client.coments}</h3>
                            <button onClick={() => handleClick(client.url)}>Edit</button>
                            </>
                        )
                    })}
                </section>
            </main>
        )
    }
    const loading = () => {
        return(<h2>Loading...</h2>)
    }

    return(
        <div>
            {clients ? loaded() : loading()}
        </div>
    )
}

export default ClientsIndex;