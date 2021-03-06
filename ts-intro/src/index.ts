/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono : Producto= {
    desc: 'Descripcion 1',
    precio: 150
}

const tablet : Producto = {
    desc: "descrpcion 2",
    precio: 200
}

function calcularIVA(productos: Producto[]): [number,number] {
    let total = 0;

    productos.forEach( ( { precio } ) =>{
        total += precio;
    } );

    return [total,total * 0.15];
}

const articulos = [telefono, tablet];

const [total,iva] = calcularIVA(articulos);

console.log(iva);
console.log(total);