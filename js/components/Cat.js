import {Pet} from './Pet.js'

class Cat extends Pet {
    constructor(vardas, spalva){
       super(vardas, spalva);
       this.sound = 'Miau Miau';

    }
    voice(){
        console.log(`${this.name}: ${this.sound}!`);
    }

}
export {Cat}