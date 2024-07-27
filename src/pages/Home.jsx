import React from 'react';
import { motion } from 'framer-motion';
import Header from '../ui/Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          opacity: 0.1
        }}
      ></div>
        <Header />

        {/* Hero Section */}
        <header className="container mx-auto px-6 py-16 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Manage Your Events with Ease
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Streamline your event planning process with our powerful and intuitive platform.
          </motion.p>
          <motion.button 
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </header>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Event Creation', description: 'Easily create and customize events with our user-friendly interface.' },
              { title: 'Attendee Management', description: 'Manage registrations, send invitations, and track attendance effortlessly.' },
              { title: 'Analytics', description: 'Gain valuable insights with our powerful analytics and reporting tools.' }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Elevate Your Events?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of event organizers who trust EventPro.
          </motion.p>
          <motion.button 
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </motion.button>
        </section>

        {/* Footer */}
        <footer className="bg-gray-200 py-8">
          <div className="container mx-auto px-6 text-center text-gray-600">
            <p>&copy; 2024 Eventory. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
};

export default Home;