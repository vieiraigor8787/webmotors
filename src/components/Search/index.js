import React from "react";

const Search = () => (
    <div className="container form">
        <div class="custom-control-inline custom-checkbox ml-5">
            <input class="custom-control-input" type="checkbox" name="new" id="new" value="new" />
            <label class="custom-control-label" for="new"> Novos </label>
        </div>
        <div class="custom-control-inline custom-checkbox ml-5 mb-3">
            <input class="custom-control-input" type="checkbox" name="used" id="used" value="used" />
            <label class="custom-control-label" for="used"> Usados </label>
        </div>
    <div class="input-group mb-3 row px-3">
        <select class="custom-select col-md-4">
            <option selected>Onde: São Paulo - SP</option>
            <option value="1">Um</option>
            <option value="2">Dois</option>
            <option value="3">Três</option>
        </select>
        <select class="custom-select col-md-2">
            <option selected>Raio: 100km</option>
            <option value="1">20Km</option>
            <option value="2">50km</option>
            <option value="3">200km</option>
            <option value="3">Mais de 200km</option>
        </select>
        <select class="custom-select col-md-3 ml-2">
            <option selected>Marcas</option>
            <option value="1">20Km</option>
        </select>
        <select class="custom-select col-md-3 ml-2">
            <option selected>Modelo</option>
            <option value="1">20Km</option>
        </select>
    </div>
       <div class="input-group row px-3">
            <select class="custom-select col-md-2">
                <option selected>Ano desejado</option>
                <option value="1">2000</option>
                <option value="2">2010</option>
                <option value="3">2011</option>
            </select> 
            <select class="custom-select col-md-4 mx-2">
                <option selected>Faixa de preço</option>
                <option value="1">R$10.000 a R$15.000</option>
                <option value="2">R$16.000 a R$20.000</option>
                <option value="3">R$21.000 a R$30.000</option>
                <option value="3">R$31.000 a R$50.000</option>
                <option value="3">Mais de R$ R$51.000</option>
            </select>
            <select class="custom-select col-md-6 ">
                <option selected>Ano desejado</option>
                <option value="1">2000</option>
                <option value="2">2010</option>
                <option value="3">2011</option>
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
)

export default Search;
