import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/forms/ResidentLoginform';
import SignupForm from './components/forms/ResidentSignupForm';
import Home from './pages/Home';
import Progress from './pages/WasteRecycleProgress';
import History from './pages/WasteHistory';
import Request from './pages/WasteRequest';
import Payment from './pages/PaymentPage';
import Logout from './pages/Logout';
import ResidentProfile from './pages/ResidentProfile';
import { AuthContextProvider } from './context/AuthContext';
import { ResidentProvider } from './pages/ResidentContext';
import NonRegHome from './pages/NonRegisteredHome';
import ResidentForgotPasswordForm from './components/forms/ResidentForgotPasswordForm';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ResidentProvider>
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<NonRegHome />} />
            <Route path='/resident-signup' element={<SignupForm />} />
            <Route path="/resident-forgot-password" element={<ResidentForgotPasswordForm />} />
            <Route path='/resident-nonreghome' element={<NonRegHome />} />
            <Route path='/resident-login' element={<LoginForm />} />
            <Route path='/payment' element={<Payment />} />
            <Route path="/logout" element={<Logout />} />

            {/* Protected Routes */}
            <Route path='/resident-home' element={<Home />} />
            <Route path='/resident-history' element={<History />} />
            <Route path='/resident-request' element={<Request />} />
            <Route path='/waste-progress' element={<Progress />} />
            <Route path='/resident-profile' element={<ResidentProfile />} />
          </Routes>
        </ResidentProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
