import { useAuth } from "hooks/user-auth";
import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "store/slice/UserSlice";



const Header = () => {
    const dispatch = useDispatch()
    const { email } = useAuth();
    return (
      <div className="bg-indigo-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
         <div>
         <h3>Hello!</h3>
         <span>{email}</span> 
         </div>       
         <button onClick={() => dispatch(removeUser())}>Log out</button>
        </div>
      </div>
    );
  };
  
  export default Header;