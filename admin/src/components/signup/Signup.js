import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";
import axios from "axios";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
   

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if(!name){
                setMessage("Name is required")
            }else if(!email){
                setMessage("Email is required")
            }else if(!password){
                setMessage("Password is required")
            }else if(password !== cpassword){
                setMessage("Password not matched")
            }else{
                setMessage("");
                console.log(name,email, password);
                const response = await axiosClient.post("/admin/signup", {
                    name,
                    email,
                    password
                });
                // setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
                navigate('/');
            }
        } catch (error) {
           
        }
    }

    return (
        <div className="signup-wrapper">
            <div className="login-box">
                <h1 className="heading">Admin Signup</h1>
                <h4 style={{color:"red", fontSize:"25px",margin:0,padding:0}}>{message}</h4>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
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
                     <label htmlFor="cpassword">Confirm Password</label>
                    <input
                        type="password"
                        className="cpassword"
                        id="cpassword"
                        onChange={(e) => setCpassword(e.target.value)}
                    />
                    <input type="submit" value="Submit" className="submit" />
                </form>
                <p className="signup-redirect">
                    Already have an account? <Link to="/login">Login</Link>{" "}
                </p>
            </div>
        </div>
    );
}

export default Signup;
