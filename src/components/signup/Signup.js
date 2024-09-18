import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";

function Signup() {
    const [name, setName] = useState("");
    const [regno, setRegno] = useState("");
    const [branch, setBranch] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [mobile, setMobile] = useState(null);
    const [course, setCourse] = useState("");
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState("");
    const [living, setLiving] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
   

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if(!name){
                setMessage("Name is required")
            }else if(!email){
                setMessage("Email is required")
            }else if(!regno){
                setMessage("Reg. No. is required")
            }else if(!branch){
                setMessage("Branch is required")
            }else if(!mobile){
                setMessage("Mobile is required")
            }else if(!course){
                setMessage("Course is required")
            }else if(!age){
                setMessage("Age is required")
            }else if(!gender){
                setMessage("Gender is required")
            }else if(!password){
                setMessage("Password is required")
            }else if(password !== cpassword){
                setMessage("Password not matched")
            }else{
                setMessage("");
                const response = await axiosClient.post("auth/signup", {
                    name,
                    email,
                    password,
                    regno,
                    branch,
                    mobile,
                    course,
                    age,
                    gender,
                    living
                });
                setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
                navigate('/');
            }
        } catch (error) {
           
        }
    }

    return (
        <div className="signup-wrapper">
            <div className="login-box">
                <h1 className="heading">Signup</h1>
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
                    <label htmlFor="regno">Reg. No.</label>
                    <input
                        type="text"
                        className="regno"
                        id="regno"
                        onChange={(e) => setRegno(e.target.value)}
                    />
                    <label htmlFor="branch">Brach</label>
                    <input
                        type="text"
                        className="branch"
                        id="branch"
                        onChange={(e) => setBranch(e.target.value)}
                    />
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="tel"
                        className="mobile"
                        id="mobile"
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <label htmlFor="course">Course</label>
                    <input
                        type="text"
                        className="course"
                        id="course"
                        onChange={(e) => setCourse(e.target.value)}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        className="age"
                        id="age"
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <label htmlFor="male">Gender</label>
                    <input
                        type="radio"
                        className="male"
                        name="gender"
                        id="male"
                        onChange={(e) => setGender("Male")}
                    /> Male
                    <input
                        type="radio"
                        className="female"
                        name="gender"
                        id="female"
                        onChange={(e) => setGender("Female")}
                    /> Female

                    <label htmlFor="Living" onChange={(e) => setLiving(e.target.value)}>Living</label>
                    <select name="living" id="living">
                        <option value="hosteller">Hosteller</option>
                        <option value="hosteller">Day Scholar</option>
                    </select>
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
