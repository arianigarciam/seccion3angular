/*
    ===== Código de TypeScript =====
*/


interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalle;
}

interface Detalle {
    autor: string;
    year: number;
}

const reproductor:Reproductor ={
    volumen: 90,
    segundo: 36,
    cancion: "Mi cancion",
    detalles: {
        autor: "Mi autor",
        year: 1996
    }
}
const autor = "aaa";
const { volumen, segundo, cancion, detalles: {autor: autorDetalle} } = reproductor;
//const { autor } = detalles 
console.log("El volumen actual es de: ",volumen);
console.log("El segundo actual es de: ",segundo);
console.log("La cancion actual es de: ",cancion);
console.log("El autor es: ",autorDetalle);
