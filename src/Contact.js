import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nestedroute from './Nestedroute';

const Contact = () => {
    return (
        <div>
            <h2>Contact Page</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit
                . Obcaecati sequi, reiciendis earum repellendus cumque accusamus quidem deleniti laboriosam unde
                blanditiis illum ipsum praesentium soluta eius corporis id incidunt cupiditate sint labore aperiam?
                Illum, eius.</p>
            <h2>This is page has nested route componenet</h2>
            <Routes>
                <Route path='/conatact/nest' element={<Nestedroute/>}/>
            </Routes>
        </div>
    );
};

export default Contact;