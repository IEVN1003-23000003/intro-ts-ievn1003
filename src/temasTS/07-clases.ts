class Persona{
    nombre: String;
    edad: number;

    constructor(nombre:String, edad: number){ //permite que se le pasen parametros e inicializa con esos parametros
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`${this.nombre},${this.edad}`); //`` permiten incrustar expresiones (como variables o llamados a funciones) directamente dentro de la cadena, sin tener que usar el signo + para concatenar
    }
}
let persona: Persona;
persona = new Persona ('Tony',32);
persona.imprimir();