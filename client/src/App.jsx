import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    const { pathname } = useLocation();
    return (
        <>
            {pathname !== '/login' && pathname !== '/register' && <Navbar />}

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
            {pathname !== '/login' && pathname !== '/register' && <Footer />}
        </>
    );
}

export default App;
