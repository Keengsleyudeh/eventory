import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logout from "../pages/Logout";
import LogButton from "./LogButton";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-3xl font-bold text-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            EventPro
          </motion.a>
          <div className="hidden md:flex space-x-4">
            {['Features', 'Pricing', 'Contact'].map((item, index) => (
              <motion.a 
                key={item} 
                href="#" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <LogButton />
        
        </nav>
  </div>
  </>
  )
}

export default Header;