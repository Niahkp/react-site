import React from 'react';
import {Outlet, Link} from "react-router-dom";
import LunchPage from '../components/LunchPage';
import Header from '../components/Header';


const Lunch = () =>{
    return(
        <>
           

            

            <Outlet />
            <LunchPage />
        </>
    );
};

export default Lunch;