//objektai
//-parametru rinkinys
//(funkcionalumo) rinkinys

/* 

Animal.Js (params: name, color, sound. Methods: voice();)
    Pet.js (viska paveldi is animal.js;)
        Dog.js (viska paveldi is pet.js)
        Cat.js (viska paveldi is pet.js)
        Hamster.js (viska paveldi is pet.js; canEatTillDeathk)


    Bird.js(params: name, color, sound. Methods: voice(), wingscount, canfly;)
        Chicken.js (viska paveldi is Bird.js)
        parrot.js(viska paveldi is Bird.js)
        eagle.js(viska paveldi is Bird.js)
        Dragonfly.js (viska paveldi is Bird.js params: imposter =true; )

    fish.js (params: name, color, canswim, methods: voice();)
        GoldFish.js (paveldi viska is fish.js; params:grantsWishes; methods:makeWish;)
        Nemo.js (viska paveldi is Fish.js)

*/
import {Dog} from './components/Dog.js'
import {Cat} from './components/Cat.js'
import { Hamster } from './components/hamster.js';
import {Pet} from './components/Pet.js'

const rexas = new Dog('Rexas','brown');
const lese = new Dog('Lese','golden');

console.log(rexas);
rexas.voice();

const rainis = new Cat('Rainis', 'rainas');
const pukis = new Cat('pukis', 'baltas');

console.log(rainis);
rainis.voice();


const cipsas = new Hamster('Cipsas', 'golden');
console.log(cipsas);
cipsas.voice();


cipsas.introduce();
rainis.introduce();
rexas.introduce();
