import './App.css';

import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/hero/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from "./components/contact/contact";
import Signin from "./components/Signin/Signin";
import AdminPage from "./components/AdminPage/AdminPage";
import Details from "./components/Details/Details";
import Screen from './components/screen/screen';
import Marketing from './components/markating/Marketing';
import Onclick from './components/markating/Onclick';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/Screen" element={<Screen />} />
          <Route path="/Details" element={<Details/>} />
          <Route path="/Marketing" element={<Marketing/>} />
          <Route path='/Onclick/:id' element={<Onclick />} />

          
        </Routes>
        <Footer/>

      </BrowserRouter>            


    </>
  );
}

export default App;
