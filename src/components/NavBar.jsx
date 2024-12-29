import { Link } from "react-router-dom";
import { signOut } from "../services/authServices";

const NavBar = (props) => {
    return (
        <nav>
            <ul>
                {props.token ?
                    <>
                        <li>
                            <Link onClick={() => {
                                signOut()
                                props.setToken(null)
                            }}>
                                sign out
                            </Link>
                        </li>
                        <li>
                            <Link to='/create'>
                                Create Client
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <Link to='/signin'>
                                sign in
                            </Link>
                        </li>
                        <li>
                            <Link to='/signup'>
                                sign up
                            </Link>
                        </li>
                    </>
                }
            </ul>
        </nav>
    )
}

export default NavBar