import React, { useState } from 'react';

const AuthForm = ({handleClick, buttonText, isSignUp}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    return (
        <div>
            { isSignUp ? <input
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              /> : null
            }
            <input 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email'
            />
               <input 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder='password'
            />

            <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-8"
            onClick={() => handleClick(email, pass, name)}>
                {buttonText}
            </button>

        </div>
        
    
    )
};

export default AuthForm;