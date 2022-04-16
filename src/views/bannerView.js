import React from 'react';
import Banner from '../components/banner';
import {Outlet} from "react-router-dom";
import "./views.css"

function MainView() {
    
    //react-router is so cool what the hell
    return (
        <div className="main">
            <Banner />
            <Outlet />
        </div>
    );
}

export default MainView;