//interfaz: clase pequeña que hereda propiedades y métodos

interface Alumno{
    nombre: string;
    apellido: string;
    edad: number;
    curso: string;
    direccion?: string;
}

//crear un objeto
const alumno:Alumno={
    nombre: "Juan",
    apellido: "López",
    edad: 22,
    curso: "ingles",
}


console.table(alumno)

let mascotas=['perro', 'gato', 'perico'];
console.log(mascotas[0]);
mascotas[1]='nuevo gato'; //agrega al array en esa posición
mascotas.push('hamster'); //agrega al array hasta el final
console.log(mascotas)

//establecer arreglos con diferentes tipos de datos
let tem:(number|string)[]=[]
tem.push(1);
tem.push('dos');
console.log(tem)