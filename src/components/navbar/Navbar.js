import React, { useRef, useState } from "react";
import "./Navbar.css";
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
        } catch (e) {}
    }

    return (
        <div className="Navbar">
            <div className="container">
                <h2 className="banner hover-link" onClick={() => navigate("/")}>
                    Campus Services
                </h2>

                <h2 className="logout hover-link" onClick={handleLogout}>
                    Logout
                </h2>
               
            </div>
        </div>
    );
}

export default Navbar;
