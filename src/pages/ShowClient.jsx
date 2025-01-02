import { useEffect, useState } from 'react';
import { getClient } from '../services/dataServices';
import { useNavigate } from 'react-router-dom';
import './ShowClient.css'

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
            <main className='page'>
                    <div className='card'>
                        <div className='cardHeadder'>
                            <h2>{client.client_name} location:</h2>
                            <h3>Location: {client.location}</h3>
                        </div>
                        <div className='cardBody'>
                            <h3>Phone No: {client.phone}</h3>
                            <h3>Gate Code: {client.gate_code}</h3>
                            <h3>Comments: {client.coments}</h3>
                        </div>
                        <div className='cardFooter'>
                        <button className="cardBtn" onClick={() => navigate(`/edit`)}>Edit</button>
                        </div>
                    </div>
                    <button className="btn" onClick={() => navigate(`/`)}>Back</button>
            </main>
        )
    }
    const loading = () => {
        return (<h2>Loading...</h2>)
    }

    return (
        <div>
            {client ? loaded() : loading()}
        </div>
    )
}

export default ShowClient;