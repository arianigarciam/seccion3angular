import { Producto, calcularIVA } from './interfaces/Producto';

/*
    ===== Código de TypeScript =====
*/


const carritoCompras: Producto[] = [
    {
        desc: 'telefono 1',
        precio: 100
    },
    {
        desc: 'telefono 2',
        precio: 150
    }
];

const [total,iva] = calcularIVA( carritoCompras );
console.log(total);
console.log(iva);