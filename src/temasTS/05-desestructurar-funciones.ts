export interface Producto {
  nombre: string,
  precio: number,
}

const telefono: Producto = {
  nombre: 'Iphone 14',
  precio: 1500
}

const tablet: Producto = {
  nombre: 'Ipad Air',
  precio: 1200
}

export function calcularISV2(productos: Producto[]): [number, number] {
  let total = 0;
  for (let producto of productos) {
    total += producto.precio
  }
  return [total, total * 0.15]
}

const articulos = [telefono, tablet]

// Call the function and destructure the result in one line
const [total, isv2] = calcularISV2(articulos)

console.log('Total:', total);
console.log('ISV 2:', isv2);