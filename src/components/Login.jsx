import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [token,setToken]=useState(null);
    const [action, setAction] = useState('signup');
   
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let response;
            if (action === 'signup') {
                response = await axios.post('https://mock-backend-masaihospital.onrender.com/user/signup', {
                    name,
                    email,
                    password
                    
                });
            } else {
                response = await axios.post('https://mock-backend-masaihospital.onrender.com/user/login', {
                    email,
                    password
                });
            }
            console.log(response);
            const Token=response.data.token;
            console.log(Token);
            setToken(Token);
            alert(response.data);
            setLoading(false);
            navigate("/appointments");
        } catch (error) {
            alert('Error in authentication. Please try again.');
            setLoading(false);
        }
    };

    const switchAction = () => {
        setAction(action === 'signup' ? 'login' : 'singup');
    };

    return (
        <>
        <h1 id='tag'>Welcome To Masai Hospital</h1>
        <div className="auth-container">
            <h2>{action === 'signup' ? 'Signup' : 'Login'}</h2>
            <button onClick={switchAction} className='switch'>Switch to {action === 'signup' ? 'Login' : 'Signup'}</button>
            <form onSubmit={handleSubmit}>
                {action === 'signup' && (
                    <label>Name:</label>
                )}
                {action === 'signup' && (
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                )}
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">{loading ? 'Loading...' : action === 'signup' ? 'Signup' : 'Login'}</button>
            </form>
            
            
        </div>
        </>
    );
};

export default Login;