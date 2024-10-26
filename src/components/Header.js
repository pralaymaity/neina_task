import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-blue-950 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-2xl font-semibold"></div>

        
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/login" className="hover:text-blue-300">
            Login
          </Link>
          <Link to="/register" className="hover:text-blue-300">
            Register
          </Link>
        </nav>

        {/* User Icon and Modal Trigger */}
        <div className="relative">
          <button onClick={toggleModal} className="flex items-center space-x-2">
            <span className="text-lg">👤</span>
            <span className="text-sm">User</span>
          </button>

          {/* Popup Modal */}
          {isModalOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 z-10">
              <h3 className="font-semibold">User Information</h3>
              <p>First Name: John</p>
              <p>Email: john@example.com</p>
              <p>Points: 123</p>
              <button
                onClick={toggleModal}
                className="mt-4 w-full py-1 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;