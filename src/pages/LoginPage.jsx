
import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "store/slice/UserSlice";
import AuthForm from "components/AuthForm";


const LoginPage = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
   
    const handleSignIn = (email, password) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
        }));
        navigate('/');
      })
      .catch(() => alert('Invalid user!'))
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <AuthForm
            buttonText="Sign In"
            // onSubmit={handleSignIn}
            handleClick = {handleSignIn}
          />

            <p>
                Or, <Link className="text-lg font-bold hover:underline" to='/register'>Sign up</Link>
            </p>
        </div>
      </div>
    )
}

export default LoginPage;