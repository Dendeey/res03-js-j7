import { Pizza } from './pizza.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let LaVeggie = new Pizza("La Veggie", "Tomate", "Fromage", "Légumes");
    let LaMeattie = new Pizza("La Meattie", "Tomate", "Fromage", "Viande");
    let LaFishie = new Pizza("La Fishie", "Tomate", "Fromage", "Poisson");
    
    console.log(LaVeggie);
    console.log(LaMeattie);
    console.log(LaFishie);
});