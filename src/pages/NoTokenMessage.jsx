import './NoTokenMessage.css'
import { Link } from "react-router-dom";
import { signOut } from "../services/authServices";

const NoTokenMessage = () => {
    return (
        <>
            <h2>Sign Up or Sign In</h2>
            <div className='btn'>
                <Link to='/signin'>
                    <button>Sign In</button>
                </Link>
                <Link to='/signup'>
                    <button>Sign Up</button>
                </Link>
            </div>
        </>
    )
}

export default NoTokenMessage;