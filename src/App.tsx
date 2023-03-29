import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ElixirsPage} from "./pages/ElixirsPage/ElixirsPage";
import {ElixirPage} from "./pages/ElixirPage/ElixirPage";

export default function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<ElixirsPage/>}/>
                <Route path="/Elixirs/:id" element={<ElixirPage/>}></Route>
            </Routes>
        </>
    )
}

// Апишка - https://wizard-world-api.herokuapp.com/swagger/index.html
//TODO: Селект, добавить его в useEffect(зависимость от его стейта + проверка в setPermElixirs)
