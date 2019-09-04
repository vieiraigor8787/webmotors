import React, { Component } from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Search from './components/Search'

import './App.css';

class App extends Component {

  state = {
    isLoading: true,
    models: [],
    error: null
  }

  fetchModels() {
    fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=1`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          models: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchModels();
  }

render() {
  const { models } = this.state;

  return (
    <div className="container main">

    <Header />
    <Menu />
    {/* <Search /> */}
    <div className="container form">
        <div className="custom-control-inline custom-checkbox ml-5">
            <input className="custom-control-input" type="checkbox" name="new" id="new" defaultValue="new" />
            <label className="custom-control-label" htmlFor="new"> Novos </label>
        </div>
        <div className="custom-control-inline custom-checkbox ml-5 mb-3">
            <input className="custom-control-input" type="checkbox" name="used" id="used" defaultValue="used" />
            <label className="custom-control-label" htmlFor="used"> Usados </label>
        </div>
    <div className="input-group mb-3 row px-3">
        <select className="custom-select col-md-4">
            <option selected>Onde: São Paulo - SP</option>
            <option defaultValue="1">Um</option>
            <option defaultValue="2">Dois</option>
            <option defaultValue="3">Três</option>
        </select>
        <select className="custom-select col-md-2">
            <option selected>Raio: 100km</option>
            <option defaultValue="1">20Km</option>
            <option defaultValue="2">50km</option>
            <option defaultValue="3">200km</option>
            <option defaultValue="3">Mais de 200km</option>
        </select>
        <select className="custom-select col-md-3 ml-2">
            <option selected>Marcas</option>
            <option defaultValue="1">20Km</option>
        </select>
        <select className="custom-select col-md-3 ml-2">
          <option selected>Modelo</option>
            {models.map(model => {
            const { ID, Name } = model
            return(
          <option key={ID} defaultValue={Name}>{Name}</option>
          )
          })}
        </select>
    </div>
       <div className="input-group row px-3">
            <select className="custom-select col-md-2">
                <option selected>Ano desejado</option>
                <option defaultValue="1">2000</option>
                <option defaultValue="2">2010</option>
                <option defaultValue="3">2011</option>
            </select> 
            <select className="custom-select col-md-4 mx-2">
                <option selected>Faixa de preço</option>
                <option defaultValue="1">R$10.000 a R$15.000</option>
                <option defaultValue="2">R$16.000 a R$20.000</option>
                <option defaultValue="3">R$21.000 a R$30.000</option>
                <option defaultValue="3">R$31.000 a R$50.000</option>
                <option defaultValue="3">Mais de R$ R$51.000</option>
            </select>
            <select className="custom-select col-md-6 ">
                <option selected>Ano desejado</option>
                <option defaultValue="1">2000</option>
                <option defaultValue="2">2010</option>
                <option defaultValue="3">2011</option>
            </select> 
        </div>

        <div className="box-footer d-flex justify-content-between px-2 mr-4 pt-4">
            <p className="mt-2">
                <a href="" className="advanced-search">> Busca avançada</a>
            </p>
            <div className="d-flex justify-content-between">
                <p className="mt-3 mr-5">
                    <a href="" className="filter"> Limpar filtros</a>
                </p>
                <button type="button" className="btn btn-danger mt-2">VER OFERTAS</button>
            </div>
        </div>
   </div>

    </div>
  )
}
}
export default App;
