import React from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import AuthForm from "components/AuthForm";
import { setUser } from "store/slice/UserSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  
  const handleSignUp = (email, password, name) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);

      updateProfile(user, { displayName: name })
        .then(() => {
          const updatedUser = auth.currentUser;

          dispatch(
            setUser({
              email: updatedUser.email,
              id: updatedUser.uid,
              token: updatedUser.refreshToken,
              displayName: updatedUser.displayName,
              lastSignInTime: updatedUser.metadata.lastSignInTime,
            })
          );

          navigate('/');
        })
        .catch((error) => {
          console.error('Error updating user profile:', error);
        });
    })
    .catch((error) => {
      console.error('Error during registration:', error);
    });
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
                isSignUp = {true}
              />

              <p>
                Or, <Link className="text-lg font-bold hover:underline" to='/login'>Sign in</Link>
            </p>

              </div>
                  
            </div>
    
    )
}

export default RegisterPage;