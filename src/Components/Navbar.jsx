import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";
import logo from "../propiedades/imagenes/logo.png"

export function Navbar (){
    return (
        <Fragment>
            <header>
                <img src={logo} alt="Icon Home" />
                <Navbar>
                    <NavLink to="/Menú">
                        <ul>Menú</ul>
                    </NavLink>
                    <NavLink to="/NuevaOrden">
                        <ul>Nueva Orden</ul>
                    </NavLink>
                    <NavLink to = "/EstadoDeLaOrden">
                        <ul>Estado de la Orden</ul>
                    </NavLink>
                    <NavLink to = "/Ordenes">
                        <ul>Ordenes</ul>
                    </NavLink>
                    <NavLink to="/OrdenesTerminadas">
                        <ul>Ordenes Terminadas</ul>
                    </NavLink>
                </Navbar>
            </header>
        </Fragment>
        
    )
}