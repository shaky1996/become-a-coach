import './App.css';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';


function App() {
    return (
        <>
        <Navbar />
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />}
                />
                <Route
                    path='/register'
                    element={<RegisterPage />}
                />
                <Route
                    path='/login'
                    element={<LoginPage />}
                />
            </Routes>
        </>
    );
}

export default App;
