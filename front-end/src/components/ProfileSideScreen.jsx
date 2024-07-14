import React, { useState } from 'react';
import profilePic from './assets/profilePic.png';

function ProfileSideScreen() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideScreen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {!isOpen && (
                <button
                    className="fixed top-4 right-4 p-2 bg-blue-500 text-white rounded-full"
                    onClick={toggleSideScreen}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.935 13.935 0 0112 15c2.65 0 5.17.815 7.121 2.204M4.293 4.293A13.935 13.935 0 015.121 6.196m13.758-1.903A13.935 13.935 0 0119.879 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4 relative">
                    <button
                        className="absolute top-4 right-4 text-gray-400"
                        onClick={toggleSideScreen}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex items-center space-x-4">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">John Doe</h2>
                            <p className="text-gray-400">Trash Collector</p>
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
                        <h3 className="text-lg font-semibold">Help and Support</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-sm text-gray-300">FAQs</li>
                            <li className="text-sm text-gray-300">Contact Support</li>
                        </ul>
                    </div>

                    <div className="mt-4">
                        <button className="w-full py-2 bg-red-500 text-white rounded-md">
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSideScreen;
