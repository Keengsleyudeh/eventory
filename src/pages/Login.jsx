import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { motion } from 'framer-motion';

// const Login = () => {
//     const { setToken } = useAuth();
//     const navigate = useNavigate();
  
//     const handleLogin = () => {
//       setToken("this is a test token");
//       navigate("/", { replace: true });
//     };
  
//     // setTimeout(() => {
//     //   handleLogin();
//     // }, 3 * 1000);
  
//     return <>
//     Login Page <button onClick={handleLogin}>Login</button>
//     <h1 className="text-3xl font-bold underline">
//         Hello world!
//       </h1>
//     </>;
//   };
  
//   export default Login;

  import React, { useState } from 'react';
import axios from "axios";

const Login = () => {

  const { username, setUsername, password, setPassword, email, setEmail, setToken } = useAuth();
  const navigate = useNavigate();

  function handleLogin(e) {
    if (!username || !password || !email ) return;
    e.preventDefault();
    setToken("QffaDtycvd");
    navigate("/table", { replace: true });
  };

//   async function handleLogin(e) {
//     // e.preventDefault();
      
//     //reqres registered sample user
//     const loginPayload = {
//       email: 'eve.holt@reqres.in',
//       password: 'cityslicka'
//     }
  
//     await axios.post("https://reqres.in/api/login", loginPayload)
//       .then(response => {
//         //get token from response
//         const token  =  response.data.token;
  
//         //set JWT token to local
//         // localStorage.setItem("token", token);
//         setToken(token);
  
//         // //set token to axios common header
//         // setAuthToken(token);
  
//  //redirect user to home page
//       navigate("/", { replace: true });
//       // window.location.href = '/'
//       })
//       .catch(err => console.log(err));
      
//   };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-inter">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please sign up/in
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
          <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out hover:border-indigo-300" 
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required/>
            </div>
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" name="username" type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out hover:border-indigo-300" 
                placeholder="Username/Firstname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out hover:border-indigo-300" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required/>
            </div>
          </div>

          <div>
            <motion.button
              onClick={handleLogin}
              type="submit" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            >
              Log in
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  )};

export default Login;