import { motion } from "framer-motion"
import { useAuth } from "../provider/authProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LogButton() {
  const token = localStorage.getItem("token");
  const { clearToken } = useAuth();
  const navigate = useNavigate();
  
  function handleClick(e) {
    if (!token) {
        e.preventDefault();
        navigate("/login", { replace: true });
      }

    else {
      clearToken(); // Clear the authentication token
      navigate("/", { replace: true }); // Navigate to the home page ("/") with replace option set to true
      toast.success("Logged out successfully")
    }
    
  }

  return (
    <>
      <motion.button 
            className="bg-blue-600 text-white text-[8px} px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
          >
            {token? "Log out" : "Log in"}
          </motion.button>
    </>
  )
}

export default LogButton;