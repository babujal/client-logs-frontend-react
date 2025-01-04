import { Link } from "react-router-dom";
import { signOut } from "../services/authServices";
import './NavBar.css'

const NavBar = (props) => {
    return (
        <nav>
            {props.token ?
                <>
                    <Link to='/create'>
                        <button className="navBtn">Create Client</button>
                    </Link>
                    <Link onClick={() => {
                        signOut()
                        props.setToken(null)
                    }}>
                        <button className="navBtn">Sign Out</button>
                    </Link>
                </>
                :
                <div className="welcomeMsg">
                    <h1>Welcome</h1>
                </div>
            }
        </nav>
    )
}

export default NavBar