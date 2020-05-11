"use strict";
import "./posts.js";
import "./form.js";

let dejson = null;
let value = null;



class FormGames {
    constructor() {
        this.formElement = document.getElementById('form');
        this.selectElement = document.getElementById('select');
        this.categoriesForm = document.getElementById('categoriesForm');
        this.otherInputsElement = document.getElementById('categoriesForm');
        this.resultsElement = document.getElementById('results');
    }
    bindEvents() {
        this.selectElement.addEventListener('change', this.changeSelect.bind(this));
        this.categoriesForm.addEventListener('change', this.changeSelect.bind(this));

    }
    changeSelect(event) {
        value = event.target.value;
        this.otherInputsElement.innerHTML = this.defineInputElements(value);
        this.resultsElement.innerHTML = this.defineInputElementsCategories(value);


    }
    defineInputElements(value) {
        switch (value) {
            case 'csgo':
                return this.inputElementWithLabel('Counter-Strike: Global Offensive');
            case 'r6':
                return this.inputElementWithLabel('Rainbow Six: Siege');
            case 'gtav':
                return this.inputElementWithLabel('Grand Theft Auto V');
            default:
                return '';
        }
    }

}




function init() {

    document.getElementById('form').addEventListener('change', function (event) {
        loadRates();

    });
}

async function loadRates() {
    const result = await fetch(`https://api-v3.igdb.com/games`);
    dejson = await result.json();


}


init();

const myForm = new FormGames();
myForm.bindEvents();