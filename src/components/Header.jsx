import React from 'react';
import img1 from '../asset/john.jpg'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">CRM System</div>
      <nav className="space-x-4">
        <a href="/" className="hover:text-gray-400">Dashboard </a>
        <a href="/users" className="hover:text-gray-400">Users </a>
        <a href="/orders" className="hover:text-gray-400">Orders</a>
      </nav>
      <div className="flex items-center space-x-2 ">
        <span>John Doe</span>
        <img
           src={img1}
           alt="Profile"
           className="w-4 h-4 rounded-full object-cover "
        />

      </div>
    </header>
  );
};

export default Header;