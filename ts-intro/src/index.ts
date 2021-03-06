/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: "Fernando"
}

const pasajero2: Pasajero = {
    nombre: "Melissa",
    hijos: ["Hijo1","Hijo2"]
}

function imprimeHijos( pasajero: Pasajero) {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log( cuantosHijos );
}

imprimeHijos(pasajero1);