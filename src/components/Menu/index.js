import React from "react";
import carro from '../../assets/imgs/icone-carro.png'
import moto from '../../assets/imgs/motorcycle-64.png'

const Menu = () => (
    <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item d-flex mr-2">
                <img src={carro} className="car"/>
                <a className="nav-link" href="#">Comprar <br /><span className="">CARROS</span></a>
            </li>
            <li className="nav-item d-flex">
            <img src={moto} className="moto"/>
                <a className="nav-link" href="#">Comprar <br /><span className="">MOTOS</span></a>
            </li>
        </ul>
        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Vender meu carro</button>
    </nav>
)

export default Menu;
