import {d2p} from './distanciaEntre2Puntos';

class Triangulo extends d2p{
    ladoA:number=0;
    ladoB:number=0;
    ladoC:number=0;
    constructor(d1x:number, d2x:number, d1y:number, d2y:number){
        super(d1x,d2x,d1y,d2y)
    }
    obtenerLado(){
        const lA = new d2p(-4,-3,2,5);
        this.ladoA = lA.distancia()
        const lB = new d2p(-4,-3,2,6);
        this.ladoB = lB.distancia()
        const lC = new d2p(-4,-3,2,7);
        this.ladoC = lC.distancia()
        console.log(`Lado A: ${this.ladoA}; Lado B: ${this.ladoB}; Lado C: ${this.ladoC}`)
        if((this.ladoA+this.ladoB)>this.ladoC || (this.ladoB+this.ladoC)>this.ladoA || (this.ladoC+this.ladoA)>this.ladoB)
            console.log(`Es triángulo`)
        else
            console.log(`No es triángulo`)
    }
}

const isTriangulo = new Triangulo(-4,-3,2,5);
isTriangulo.obtenerLado();

/*const distancia1 = new d2p(-4,-3,2,5);
console.log(`Punto 1: ${distancia1.distancia()}`)
const distancia2 = new d2p(-4,-3,2,5);
console.log(`Punto 2: ${distancia2.distancia()}`)
const distancia3 = new d2p(-4,-3,2,5);
console.log(`Punto 3: ${distancia3.distancia()}`)*/