import {d2p} from './distanciaEntre2Puntos';

class Triangulo extends d2p{
    d3x:number;
    d3y:number;
    constructor(d1x:number, d1y:number, d2x:number, d2y:number, d3x:number, d3y:number){
        super(d1x,d1y,d2x,d2y)
        this.d3x=d3x
        this.d3y=d3y
    }
    obtenerLado(){
        const ladoA = this.distancia(this.d1x, this.d1y, this.d2x, this.d2y);
        const ladoB = this.distancia(this.d2x, this.d2y, this.d3x, this.d3y);
        const ladoC = this.distancia(this.d3x, this.d3y, this.d1x, this.d1y);
        console.log(`Lado AB: ${ladoA}; Lado BC: ${ladoB}; Lado CA: ${ladoC}`)
        if((ladoA+ladoB)>ladoC && (ladoB+ladoC)>ladoA && (ladoC+ladoA)>ladoB){
            console.log(`Los puntos: (${this.d1x}, ${this.d1y}), (${this.d2x}, ${this.d2y}), (${this.d3x}, ${this.d3y}): forman un triángulo`);
        }else{
            console.log(`No es posible construirlo con los puntos: (${this.d1x}, ${this.d1y}), (${this.d2x}, ${this.d2y}), (${this.d3x}, ${this.d3y})`)
        }
    }
}

const isTriangulo = new Triangulo(0,0,4,0,4,3);


isTriangulo.obtenerLado();