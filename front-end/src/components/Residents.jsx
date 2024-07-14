import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';
import back from './assets/bg5.jpg';
import Modal from 'react-modal';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

Modal.setAppElement('#root'); // to avoid accessibility issues with the modal

function Table() {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        houseNumber: '',
        address: '',
        phoneNumber: '',
        email: ''
    });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentStats, setCurrentStats] = useState(null);
    const [loading, setLoading] = useState(false);

    const today = new Date().toLocaleDateString();

    useEffect(() => {
        axios.get('http://localhost:8003/api/residents')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const handleSegregate = (id) => {
        setLoading(true);
        axios.post(`http://localhost:8003/api/residents/segregate/${id}`)
            .then(() => {
                setData(prevData => prevData.map(resident =>
                    resident.id === id ? { ...resident, segregatedCount: resident.segregatedCount + 1 } : resident
                ));
                toast.success('Segregation count updated successfully');
            })
            .catch(error => {
                console.error('There was an error updating segregation status!', error);
                toast.error('Error updating segregation count');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleNotSegregate = (id) => {
        setLoading(true);
        axios.post(`http://localhost:8003/api/residents/not-segregate/${id}`)
            .then(() => {
                setData(prevData => prevData.map(resident =>
                    resident.id === id ? { ...resident, notSegregatedCount: resident.notSegregatedCount + 1 } : resident
                ));
                toast.success('Email sent successfully');
            })
            .catch(error => {
                console.error('There was an error sending the email!', error);
                toast.error('There was an error sending the email');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8003/api/residents/${id}`)
            .then(() => {
                setData(data.filter(person => person.id !== id));
                alert('Resident deleted successfully');
            })
            .catch(error => {
                console.error('There was an error deleting the resident!', error);
            });
    };

    const handleAddResident = () => {
        setShowForm(true);
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8003/api/residents', formValues)
            .then(response => {
                setData([...data, response.data]);
                setShowForm(false);
                setFormValues({
                    name: '',
                    houseNumber: '',
                    address: '',
                    phoneNumber: '',
                    email: ''
                });
            })
            .catch(error => {
                console.error('There was an error adding the resident!', error);
            });
    };

    const handleCancelForm = () => {
        setShowForm(false);
        setFormValues({
            name: '',
            houseNumber: '',
            address: '',
            phoneNumber: '',
            email: ''
        });
    };

    const handleShowStats = (id) => {
        const resident = data.find(res => res.id === id);
        setCurrentStats(resident ? { segregated: resident.segregatedCount, notSegregated: resident.notSegregatedCount } : null);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div
            className="flex flex-col items-center min-h-screen"
            style={{
                backgroundImage: `url(${back})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <ToastContainer />
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <Oval
                        height={80}
                        width={80}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                </div>
            )}
            <div className="text-center mb-4">
                <span className="text-xl font-semibold text-white">Waste Segregation Report (as of: {today})</span>
                <button onClick={handleAddResident} className="px-4 py-2 ml-4 text-sm rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                    Add Resident
                </button>
            </div>
            {showForm && (
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="name" value={formValues.name} onChange={handleFormChange} placeholder="Name" required className="px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-white focus:outline-none focus:border-blue-500" />
                            <input type="text" name="houseNumber" value={formValues.houseNumber} onChange={handleFormChange} placeholder="House Number" required className="px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-white focus:outline-none focus:border-blue-500" />
                            <input type="text" name="address" value={formValues.address} onChange={handleFormChange} placeholder="Address" required className="px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-white focus:outline-none focus:border-blue-500" />
                            <input type="tel" name="phoneNumber" value={formValues.phoneNumber} onChange={handleFormChange} placeholder="Phone Number" required className="px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-white focus:outline-none focus:border-blue-500" />
                            <input type="email" name="email" value={formValues.email} onChange={handleFormChange} placeholder="Email" required className="px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-white focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">Submit</button>
                            <button type="button" onClick={handleCancelForm} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none">Cancel</button>
                        </div>
                    </form>
                </div>
            )}
            <div className="flex justify-center w-full">
                <div className="w-full md:w-2/3 lg:w-1/2">
                    <div className="flex justify-center">
                        <table className="min-w-full bg-gray-800 border border-gray-600 rounded-lg shadow-lg">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 bg-gray-900 text-white">ID</th>
                                    <th className="py-2 px-4 bg-gray-900 text-white">Name</th>
                                    <th className="py-2 px-4 bg-gray-900 text-white">House Number</th>
                                    <th className="py-2 px-4 bg-gray-900 text-white">Address</th>
                                    <th className="py-2 px-4 bg-gray-900 text-white">Phone Number</th>
                                    <th className="py-2 px-4 bg-gray-900 text-white">Email</th>
                                    <th className="py-2 px-4 bg-gray-900 text-white">Segregated Count</th>
                                    <th className="py-2 px-4 bg-gray-900 text-white">Not Segregated Count</th>
                                    <th className="py-2 px-4 bg-gray-900 text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((person) => (
                                    <tr key={person.id} className="hover:bg-gray-700">
                                        <td className="py-2 px-4 border-b border-gray-600 text-white">{person.id}</td>
                                        <td className="py-2 px-4 border-b border-gray-600 text-white">{person.name}</td>
                                        <td className="py-2 px-4 border-b border-gray-600 text-white">{person.houseNumber}</td>
                                        <td className="py-2 px-4 border-b border-gray-600 text-white">{person.address}</td>
                                        <td className="py-2 px-4 border-b border-gray-600 text-white">{person.phoneNumber}</td>
                                        <td className="py-2 px-4 border-b border-gray-600 text-white">{person.email}</td>
                                        <td className="py-2 px-4 border-b border-gray-600 text-white">{person.segregatedCount}</td>
                                        <td className="py-2 px-4 border-b border-gray-600 text-white">{person.notSegregatedCount}</td>
                                        <td className="py-2 px-4 border-b border-gray-600 text-white">
                                            <div className="flex flex-col space-y-2">
                                                <button
                                                    onClick={() => handleSegregate(person.id)}
                                                    className="px-3 py-1 text-xs text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
                                                >
                                                    Segregated
                                                </button>
                                                <button
                                                    onClick={() => handleNotSegregate(person.id)}
                                                    className="px-3 py-1 text-xs text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
                                                >
                                                    Not Segregated
                                                </button>
                                                <button
                                                    onClick={() => handleShowStats(person.id)}
                                                    className="px-3 py-1 text-xs text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none"
                                                >
                                                    Stats
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(person.id)}
                                                    className="px-3 py-1 text-xs text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Statistics Modal"
                className="p-6 bg-white rounded-md shadow-md max-w-md mx-auto mt-24"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <h2 className="text-lg font-semibold mb-4">Statistics</h2>
                {currentStats && (
                    <div className="relative h-64">
                        <Pie
                            data={{
                                labels: ['Segregated', 'Not Segregated'],
                                datasets: [
                                    {
                                        data: [currentStats.segregated, currentStats.notSegregated],
                                        backgroundColor: ['#36A2EB', '#FF6384'],
                                        hoverBackgroundColor: ['#36A2EB', '#FF6384']
                                    }
                                ]
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                )}
                <button onClick={closeModal} className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">Close</button>
            </Modal>
        </div>
    );
}

export default Table;
