import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cater from "./pages/Cater";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";
import Review from "./pages/Review";
import Reserve from "./pages/Reserve";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App =() =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={(<Layout />)} >
        <Route index element={(<Home />)} />
        <Route path = "About" element={(<About />)} />
        <Route path = "Cater" element={(<Cater />)} />
        <Route path = "Lunch" element={(<Lunch />)} />
        <Route path = "Dinner" element={(<Dinner />)} />
        <Route path = "Review" element={(<Review />)} />
        <Route path = "Reserve" element={(<Reserve />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
    <App />
);

