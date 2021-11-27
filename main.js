import Base from "./base.js";
import Viajes from "./viajes.js";

class App{

    constructor(){

        this._listaBases = new Viajes ();

        this._div = document.querySelector("#infoDeBases");

        let btnAdd = document.querySelector("#btnAdd");
        btnAdd.addEventListener("click",this.__agregarBase);

        let btnDelete = document.querySelector("#btnDelete");
        btnDelete.addEventListener("click",this._eliminarBase);

        let btnList = document.querySelector("#btnList");
        btnList.addEventListener("click",this._listarBases);

        let btnCrearTarjeta = document.querySelector("#btnCrearTarjeta");
        btnCrearTarjeta.addEventListener("click",this._crearTarjeta);

    }

    _agregarBase = () =>{

        let nombre = document.getElementById("txtNombre").value;
        let cantidadMinutos = document.getElementById("txtCantidad").value;
        
        if(nombre && cantidadMinutos){

            document.getElementById("txtNombre").value = ""
            document.getElementById("txtCantidad").value = ""

            let base = new Base (nombre, cantidadMinutos);

            this._div.innerHTML = this._listaBases.agregar(base);

        }else{

            this._div.innerHTML = ""
        };
        
        
    };

    _eliminarBase = () =>{

        let nombre = document.getElementById("txtNombre").value;

        let resul = this._listaBases.eliminar(nombre);

        return resul;

    };

    _listarBases = () =>{

        this._div.innerHTML = this._listaBases.listar();

        return;

    };

    _crearTarjeta = () =>{

        let baseInicio = document.getElementById("txtBaseInicio").value;
        let horaInicio = document.getElementById("txtHora").value;
        let duracionViaje = document.getElementById("txtDuracion").value;

        if(baseInicio && horaInicio && duracionViaje){

            this._div.innerHTML = this._listaBases.crearTarjeta(baseInicio, horaInicio, duracionViaje)

            document.getElementById("txtBaseInicio").value = ""
            document.getElementById("txtHora").value = ""
            document.getElementById("txtDuracion").value = ""

            return; 
        }

    };


};




let c1 = new Viajes();
let p1 = new Base("El Diezmo", 10);
let p2 = new Base("Ignacio Sandoval", 20);
let p3 = new Base("Universidad de Colima", 15);
let p4 = new Base("Valle Verde", 25);
let p5 = new Base("Las Lomas", 40);
let p6 = new Base("Pablo Silva", 25);
let p7 = new Base("Carl´s Jr", 15);

console.log(c1.agregar(p1));
console.log(c1.agregar(p2));
console.log(c1.agregar(p3));
console.log(c1.agregar(p4));
console.log(c1.agregar(p5));
console.log(c1.agregar(p6));
console.log(c1.agregar(p7));

console.log(c1.listar());

console.log(c1.eliminar("Ignacio Sandoval"));

console.log(c1.listar());

console.log(c1.crearTarjeta("Pablo Silva", 7, 150))

new App ();