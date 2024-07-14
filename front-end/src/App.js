import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Table from './components/Table';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Residents from './components/Residents';
import Login from './components/Login';

const data = [
  { id: 1, name: 'Riya Sharma', houseNumber: 123, address: 'Main Street', phoneNumber: '123-456-7890', email: 'riya.sharma@example.com' },
  { id: 2, name: 'Aakash Patel', houseNumber: 456, address: 'Hill Road', phoneNumber: '987-654-3210', email: 'aakash.patel@example.com' },
  { id: 3, name: 'Priya Singh', houseNumber: 789, address: 'Lake Avenue', phoneNumber: '876-543-2109', email: 'priya.singh@example.com' },
  { id: 4, name: 'Rahul Kapoor', houseNumber: 1011, address: 'Park Lane', phoneNumber: '765-432-1098', email: 'rahul.kapoor@example.com' },
  { id: 5, name: 'Aisha Khan', houseNumber: 1314, address: 'Beach Road', phoneNumber: '654-321-0987', email: 'aisha.khan@example.com' },
  { id: 6, name: 'Vikram Mehta', houseNumber: 1617, address: 'Market Street', phoneNumber: '543-210-9876', email: 'vikram.mehta@example.com' },
  { id: 7, name: 'Pooja Joshi', houseNumber: 1920, address: 'Station Road', phoneNumber: '432-109-8765', email: 'pooja.joshi@example.com' },
  { id: 8, name: 'Aman Kumar', houseNumber: 2223, address: 'Temple Road', phoneNumber: '321-098-7654', email: 'aman.kumar@example.com' },
  { id: 9, name: 'Nikita Desai', houseNumber: 2526, address: 'Railway Road', phoneNumber: '210-987-6543', email: 'nikita.desai@example.com' },
  { id: 10, name: 'Sahil Gupta', houseNumber: 2829, address: 'Airport Road', phoneNumber: '109-876-5432', email: 'sahil.gupta@example.com' },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  

  return (
    <div className="App">
      <Router>
        {isAuthenticated && <Navbar />}
        <Routes>
          {!isAuthenticated && (
            <Route path="/*" element={<Login onLogin={handleLogin} />} />
          )}
          {isAuthenticated && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/table" element={<Table data={data} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/example" element={<Signin />} />
              <Route path="/resident" element={<Residents />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
