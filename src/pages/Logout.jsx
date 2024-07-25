import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { motion } from "framer-motion";
import Header from "../ui/Header";

const Logout = () => {
  const { clearToken } = useAuth();
  const navigate = useNavigate();
   const token = localStorage.getItem("token")
  // const url = token? "/logout" : "/login"

  // Function to handle logout
  const handleLogout = () => {
    clearToken(); // Clear the authentication token
    navigate("/", { replace: true }); // Navigate to the home page ("/") with replace option set to true
  };

  // Automatically logout after 3 seconds
//   setTimeout(() => {
//     handleLogout(); // Invoke the logout action
//   }, 3 * 1000);

  return <>
          <motion.button 
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick= {handleLogout}
          >
            {token? "Log out" : "Log in"}
          </motion.button>
  </>;
};

export default Logout;