import React, { useRef, useState } from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import { axiosClient } from "../../utils/axiosClient";

function Navbar() {
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await axiosClient.post("/auth/logout");
            removeItem(KEY_ACCESS_TOKEN);
            navigate("/login");
        } catch (e) { }
    }

    return (
        <div classNameName="Navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container">
                    <h4 classNameName="banner hover-link" onClick={() => navigate("/")}>
                        Campus Services
                    </h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{marginLeft:"100px"}}>
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/room">Room Maintenance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/wifi">WIFI Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/bike">Bike Rent</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="health">Health Counselling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/laundary">Laundary Service</a>
                            </li>
                            <li className="nav-item">
                                <a classNameName="nav-link logout" onClick={handleLogout}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div classNameName="container">




            </div>
        </div>
    );
}

export default Navbar;
