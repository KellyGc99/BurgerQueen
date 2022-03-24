import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Orders } from "./Components/viewJefeDeCocina/Ordenes";
import { NewOrder } from "./Components/viewMesero/NuevaOrden";
import { OrderStatus } from "./Components/viewMesero/EstadoDeLaOrden";
import { OrderFinished } from "./Components/viewJefeDeCocina/OrdenesTerminadas";

export function App (){
    return (
    <Routes>
        <Route exact path= '/' element={<Home />} />
        <Route path= '*' element = {<Navigate replace to = '/'/>} />
        <Route path='/NuevaOrden' element={<NewOrder/>} />
        <Route path='EstadoDeLaOrden' element={<OrderStatus/>} />
        <Route path='/OrdenesTerminadas' element={<OrderFinished/>} />
        <Route path='/Ordenes' element={<Orders/>} />
    </Routes>
    )
}
