import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chips from './Chips';
import Candy from './Candy';
import Drink from './Drink';
import Home from './Home';
import './VendingMachine.css';


const VendingMachine = () => {
    return (
        <BrowserRouter>
            <div className='container'>

                <Routes>
                    <Route
                        exact path='/'
                        element={<Home />}>
                    </Route>
                    <Route
                        exact path="/drink"
                        element={<Drink />}>
                    </Route>
                    <Route
                        exact path="/chips"
                        element={<Chips />}>
                    </Route>
                    <Route
                        exact path="/candy"
                        element={<Candy />}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default VendingMachine;