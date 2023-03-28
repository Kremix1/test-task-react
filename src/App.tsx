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
//TODO: Возвращение к списку по ТЗ
//TODO: Фильтр
//TODO: Остальное ТЗ
//TODO: Адаптив
//TODO: Хранение данных в redux + переход к ним как к элементу по id на странице эликсира
//TODO: Проверить на product/s везде в коде


export default App;
