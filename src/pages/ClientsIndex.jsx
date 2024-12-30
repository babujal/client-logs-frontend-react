import { useEffect, useState } from 'react';
import { fetchClients } from '../services/dataServices';
import { useNavigate } from 'react-router-dom';
import './ClientsIndex.css'

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
                    <table>
                        <tr>
                            <th>Client Name</th>
                            <th>Location</th>
                            <th>Tap to see entry</th>
                        </tr>
                        {clients.map((client, i) => {
                            return (
                                <>
                                    <tr key={i}>
                                        <td>{client.client_name}</td>
                                        <td>{client.location}</td>
                                        <td><button onClick={() => handleClick(client.url)}>Show Client</button></td>
                                    </tr>
                                </>
                            )
                        })}
                    </table>
                </section>
            </main>
        )
    }
    const loading = () => {
        return (<h2>Loading...</h2>)
    }

    return (
        <div>
            {clients ? loaded() : loading()}
        </div>
    )
}

export default ClientsIndex;