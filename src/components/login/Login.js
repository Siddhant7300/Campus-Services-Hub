import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
   

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axiosClient.post("auth/login", {
                email,
                password,
            });
            setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
            navigate('/');
        } catch (error) {
           
        }
    }

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h1 className="heading">Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="emial"
                        className="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="submit" value="Submit" className="submit" />
                </form>
                <p className="signup-redirect">
                    Don't have an account? <Link to="/signup">Signup</Link>{" "}
                </p>
            </div>
        </div>
    );
}

export default Login;
