import React from "react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h2>HomePage</h2>
            <Navigate to="/login" />
        </div>
   
    )
}

export default HomePage;