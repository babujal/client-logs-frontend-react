import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/authServices";
import './SignUp.css'
const BASE_URL = import.meta.env.VITE_BASE_URL;

const SignUp = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConf: ''
    });
    const [errMessage, setErrMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData, //The existing formdata's data
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //call our backend to create the user and save the token
            const userResponse = await signUp(formData);
            console.log('Accesing the user data token:', userResponse.data)
            //set the user
            props.setToken(userResponse.data);
            //navigate the user to the logged page
            navigate('/')
        } catch (err) {
            setErrMessage(err.message)
        }
    }

    const isFormInvalid = () => {
        if (!formData.username || !formData.password || !formData.passwordConf) {
            return true;
        } else if (formData.password !== formData.passwordConf) {
            return true;
        } else if (formData.username.length < 3 || formData.password.length < 4) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <main>
            <div className="compHeader">
                <h2>Sign Up</h2>
                <p>{errMessage}</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    Username:<br />
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Password:<br />
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Confirm Password:<br />
                    <input
                        type="text"
                        name="passwordConf"
                        value={formData.passwordConf}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit" disabled={isFormInvalid()}>Sign Up</button>
                    <button onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    )
}

export default SignUp