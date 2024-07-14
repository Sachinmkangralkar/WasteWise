import React, { useState } from 'react';
import back from './assets/bg5.jpg';

function Example() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideScreen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                backgroundImage: `url(${back})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className="flex items-center justify-end">
                {/* Profile button to toggle sidebar */}
                <button
                    className="px-3 py-2 bg-blue-500 text-white rounded-full mr-4"
                    onClick={toggleSideScreen}
                >
                    Profile
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4">
                    {/* Close button inside the sidebar */}
                    <button
                        className="absolute top-4 right-4 text-gray-300"
                        onClick={toggleSideScreen}
                    >
                        Close
                    </button>

                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                        <div>
                            <h2 className="text-xl font-semibold">Sankalp </h2>
                            <p className="text-gray-500">Garbologist</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Notifications</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-sm text-gray-300">
                                - You have 3 pending collections.
                            </li>
                            <li className="text-sm text-gray-300">
                                - 2 non-compliance issues reported.
                            </li>
                            <li className="text-sm text-gray-300">
                                - Waste collection statistics updated.
                            </li>
                        </ul>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Settings</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-sm text-gray-300">Account Settings</li>
                            <li className="text-sm text-gray-300">Notification Preferences</li>
                            <li className="text-sm text-gray-300">Language Options</li>
                        </ul>
                    </div>

                    

                    <div className="mt-4">
                        <button className="w-full py-2 bg-red-500 text-white rounded-md">
                            Log Out
                        </button>
                    </div>
                </div>
            </div>

            {/* Dark overlay behind the sidebar */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 h-screen w-screen bg-black opacity-50"
                    onClick={toggleSideScreen}
                ></div>
            )}
        </div>
    );
}

export default Example;
