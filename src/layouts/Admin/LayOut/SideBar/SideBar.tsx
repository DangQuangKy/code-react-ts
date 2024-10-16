import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faUser,  faSignOutAlt, faCalendarDays, faTable } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <nav className="w-64 h-auto bg-gray-800 text-gray-100 flex flex-col">
            <div className="p-6">
                <h2 className="text-xl font-semibold">Admin Page</h2>
            </div>
                <ul className="flex flex-col flex-grow">
                    <li>
                        <Link to="/Admin" className="flex items-center p-4 hover:bg-gray-700">
                            <FontAwesomeIcon icon={faDashboard} className="mr-3" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/Admin/tables" className="flex items-center p-4 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faTable} className='mr-3'/>  
                            Tables
                        </Link>
                    </li>
                    <li>
                        <Link to="/Admin/calendar" className="flex items-center p-4 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faCalendarDays} className='mr-3'/>  
                         Calendar
                        </Link>
                    </li>
                    <li>
                        <Link to="/Admin/profile" className="flex items-center p-4 hover:bg-gray-700">
                            <FontAwesomeIcon icon={faUser} className="mr-3" />
                            Profile
                        </Link>
                    </li>
                    <li className='lassName="flex items-center p-4 hover:bg-gray-700'>
                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
                            Logout
                    </li>
                </ul>
        </nav>
    );
};

export default Sidebar;
