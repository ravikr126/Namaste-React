import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Read from './Read'

const App = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Create />}></Route>
                <Route exact path='read' element={<Read />}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;