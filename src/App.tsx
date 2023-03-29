import React from 'react';
import {Route, Routes} from "react-router-dom";
import {SpellsPage} from "./pages/SpellsPage/SpellsPage";
import {SpellPage} from "./pages/SpellPage/SpellPage";

export default function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<SpellsPage/>}/>
                <Route path="/Spells/:id" element={<SpellPage/>}></Route>
            </Routes>
        </>
    )
}

// Апишка - https://wizard-world-api.herokuapp.com/swagger/index.html
//TODO: Селект, добавить его в useEffect(зависимость от его стейта + проверка в setPermElixirs)
//TODO: Проверить на spell
//TODO: Поменять все стили на spell
