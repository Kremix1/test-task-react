import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ElixirsPage} from "./pages/ElixirsPage/ElixirsPage";
import {ElixirPage} from "./pages/ElixirPage/ElixirPage";

function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<ElixirsPage/>}/>
                <Route path="/Elixirs/:id" element={<ElixirPage/>}></Route>
            </Routes>
        </>
    )
}

//TODO: Апишка - https://wizard-world-api.herokuapp.com/swagger/index.html
//TODO: Селект и радиокнопки
//TODO: Остальное ТЗ
//TODO: Адаптив


export default App;
