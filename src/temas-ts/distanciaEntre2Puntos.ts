export class d2p{
    protected d1x:number;
    protected d1y:number;
    protected d2x:number;
    protected d2y:number;
    private dist:number=0;
    constructor(d1x:number, d1y:number, d2x:number, d2y:number){
        this.d1x=d1x;
        this.d1y=d1y;
        this.d2x=d2x;
        this.d2y=d2y;
    }

    distancia():number{
        this.dist = Math.sqrt(((this.d2x-this.d1x)**2)+((this.d2y-this.d1y)**2))
        //console.log(`La distancia entre (${this.d1x},${this.d1y}) y (${this.d2x},${this.d2y}) es igual a ${this.dist}`)
        return this.dist
    }
}

//const distancia2puntos = new d2p(-4,-3,2,5);
//distancia2puntos.distancia()