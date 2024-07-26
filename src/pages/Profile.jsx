import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';

const Profile = () => {
   const {username} = useAuth();
    const navigate = useNavigate();
  return (
    <div className="bg-gray-100 font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{username}</h1>
            <div className="flex items-center justify-center text-gray-600">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>keengsleyudeh@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4">
          <button
          onClick={()=>navigate(-1)} 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded shadow">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;