import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from '../services/api'

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("register/", {
                username, password
            });
            alert("Successfully Registered! Please login.");
            navigate('/');
        } catch (error) {
            alert("Registration failed. Please try again.");
        }
    }

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <div className="form-footer">
                <p>Already have an account? <Link to="/">Login</Link></p>
            </div>
        </div>
    )
}

export default Register;

