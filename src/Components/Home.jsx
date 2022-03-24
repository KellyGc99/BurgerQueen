import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export function Home (){
    let navegar = useNavigate();
    return (
        <Fragment>
            <button onClick= {() =>navegar ("/NuevaOrden")}>Mesero</button>
            <button onClick= {() =>navegar ("/Ordenes")}>Jefe de Cocina</button>
        </Fragment>
    )
}