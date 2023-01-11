import { Warrior } from './warrior.js';
import { Mage } from './mage.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let mage = new Mage("Ryze", "50", "50");
    let warrior = new Warrior("Garen", "50", "10");
    
    
    console.log(mage);
    console.log(warrior);
    
});