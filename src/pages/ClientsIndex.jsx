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
            <section>
                <table>
                    <tr>
                        <th>Client Name</th>
                        <th>Location</th>
                        <th>Tap to show</th>
                    </tr>
                    {clients.map((client, i) => {
                        return (
                            <>
                                <tr key={i}>
                                    <td>{client.client_name}</td>
                                    <td>{client.location}</td>
                                    <td className='showLink'><button className='showBtn' onClick={() => handleClick(client.url)}>Details</button></td>
                                </tr>
                            </>
                        )
                    })}
                </table>
            </section>
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