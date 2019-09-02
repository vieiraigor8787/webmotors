import React from "react";

const Search = () => (
    <div className="container form">
        <div class="custom-control-inline custom-checkbox ml-4">
            <input class="custom-control-input" type="checkbox" name="new" id="new" value="new" />
            <label class="custom-control-label" for="new"> Novos </label>
        </div>
        <div class="custom-control-inline custom-checkbox ml-5 mb-3">
            <input class="custom-control-input" type="checkbox" name="used" id="used" value="used" />
            <label class="custom-control-label" for="used"> Usados </label>
        </div>
    <div class="input-group mb-3">
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
        <select class="custom-select col-md-3 ml-3">
            <option selected>Marcas</option>
            <option value="1">20Km</option>
        </select>
        <select class="custom-select col-md-3 ">
            <option selected>Modelo</option>
            <option value="1">20Km</option>
        </select>
    </div>
       <div class="input-group ">
            <select class="custom-select col-md-2">
                <option selected>Ano desejado</option>
                <option value="1">2000</option>
                <option value="2">2010</option>
                <option value="3">2011</option>
            </select> 
            <select class="custom-select col-md-4 ">
                <option selected>Faixa de preço</option>
                <option value="1">10 a 15 mil</option>
                <option value="2">16 a 20 mil</option>
                <option value="3">21 a 30 mil</option>
                <option value="3">31 a 50 mil</option>
                <option value="3">Mais de 50 mil</option>
            </select>
            <select class="custom-select col-md-6 ">
                <option selected>Ano desejado</option>
                <option value="1">2000</option>
                <option value="2">2010</option>
                <option value="3">2011</option>
            </select> 
        </div>

        <div className="box-footer d-flex justify-content-between">
            <p className=" mt-5">
                <a href="" className="advanced-search pt-10">> Busca avançada</a>
            </p>
            <div className="d-flex justify-content-between ">
                <p className=" mt-5">
                    <a href="" className="filter pt-10"> Limpar filtros</a>
                </p>
                <button type="button" className="btn btn-danger">VER OFERTAS</button>
            </div>
        </div>
   </div>
)

export default Search;
