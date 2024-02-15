import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/user-auth"; 
import Header from "components/Header";


const HomePage = () => {
    const { isAuth } = useAuth();
    
    return isAuth ? (
        <div>
            <Header />
        </div>
    ) : (
        <div>
            <h2>HomePage</h2>
            <Navigate to="/login" />
        </div>
   
    )
}

export default HomePage;