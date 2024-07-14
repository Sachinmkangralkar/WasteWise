import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'; // Import faTrashCan icon
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-[#155754]"> {/* Set background color and hover effect */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center"> {/* Wrap icon and app name */}
          <FontAwesomeIcon icon={faTrashCan} className="text-teal-400 text-4xl hover:text-gray-300 mr-4" /> {/* Icon with styles */}
          <a href="#" style={{ color: "Chartreuse" }} className="text-4xl font-bold">WasteWise</a> {/* Adjusted font size */}
        </div>
        <ul className="flex space-x-4 text-white">
                  <li><Link to="/" className="px-5 py-3 rounded-md hover:text-[#000f89]">Home</Link></li>
                  <li><Link to="/contact" className="px-5 py-3 rounded-md hover:text-[#000f89]">Contact</Link></li>
                  <li><Link to="/resident" className="px-5 py-3 rounded-md hover:text-[#000f89]">Resident details</Link></li>
                  <li><Link to="/example"><FaRegUserCircle className="text-white text-4xl hover:text-[#000f89]" /></Link></li>
              </ul>
      </div>
    </nav>
  );
}

export default Navbar;
