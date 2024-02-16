import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/user-auth"; 
import Header from "components/Header";
import UserTable from "components/UserTable";


const HomePage = () => {
    const { isAuth } = useAuth();
    
    return isAuth ? (
        <div>
            <Header />
            < UserTable />
        </div>
    ) : (
        <div>
            <Navigate to="/login" />
        </div>
   
    )
}

export default HomePage;