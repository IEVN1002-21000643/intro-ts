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

    distancia(x1:number, y1:number, x2:number, y2:number):number{
        this.dist = Math.sqrt(((x2-x1)**2)+((y2-y1)**2))
        //console.log(`La distancia entre (${this.d1x},${this.d1y}) y (${this.d2x},${this.d2y}) es igual a ${this.dist}`)
        return this.dist
    }
}

//const distancia2puntos = new d2p(-4,-3,2,5);
//distancia2puntos.distancia()