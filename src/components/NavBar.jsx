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
                    <>
                        <Link to='/signin'>
                            <button>Sign In</button>
                        </Link>
                        <Link to='/signup'>
                            <button>Sign Up</button>
                        </Link>
                    </>
                }
        </nav>
    )
}

export default NavBar