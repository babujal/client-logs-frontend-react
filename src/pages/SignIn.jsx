import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/authServices";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const SignIn = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
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
            const userResponse = await signIn(formData);
            console.log('Accesing the user data token:', userResponse.data)
            //set the user
            props.setToken(userResponse.data);
            //navigate the user to the logged page
            navigate('/')
        }catch(err){
            setErrMessage(err.message)
        }
    }

    const isFormInvalid = () => {
        if (!formData.username || !formData.password) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <main>
            <h1>Sign In</h1>
            <p>{errMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    Username:<br/>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Password:<br/>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit" disabled={isFormInvalid()}>Sign in</button>
                    <button onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    )
}

export default SignIn