import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthForm from "components/AuthForm";
import { setUser } from "store/slice/UserSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  
  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
            }));
            navigate('/');
        })
        .catch(console.error)
}
  return (
            
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">
              <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
          </div>


              <AuthForm
                buttonText="Sign Up"
                handleClick = {handleSignUp}
                // onSubmit={(formData) => handleSignUp(formData)}
              />

              <p>
                Or, <Link className="text-lg font-bold hover:underline" to='/login'>Sign in</Link>
            </p>

              </div>
                  
            </div>
    
    )
}

export default RegisterPage;