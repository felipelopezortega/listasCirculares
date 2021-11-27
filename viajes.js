export default class Viajes{

    constructor(){

        this._inicio = null;
    }

    agregar(nuevaRuta){

        if(this._inicio == null){

            this._inicio = nuevaRuta
            nuevaRuta._anterior = this._inicio
            nuevaRuta._siguiente = this._inicio

            return `${this._inicio.info()}$`

        }else{

            let ultimo = this._inicio._anterior
            nuevaRuta._siguiente = this._inicio
            nuevaRuta._anterior = ultimo
            ultimo._siguiente = nuevaRuta
            this._inicio._anterior = nuevaRuta

            return `${nuevaRuta.info()}$`
        };

    };

    listar(){

        let lista = ""

        if(this._inicio!==null){

            let temp = this._inicio;

            do{

                lista += temp.info() + '\n';
                temp = temp._siguiente;

            }while(temp!==this._inicio);

        }

        return lista;
    }

    eliminar(nombreRuta){

        if(this._inicio!== null){

            let temp = this._inicio;
            let eliminado = null;

            while(temp._name!==nombreRuta){

                temp = temp._siguiente;
            };

            eliminado = temp;
            temp._siguiente._anterior = temp._anterior;
            temp._anterior._siguiente = temp._siguiente;
            temp._siguiente = null;
            temp._anterior = null;
            temp = temp._siguiente;

            return "Se ha eliminado " + eliminado._name;

        }

        return temp; 


    }

    crearTarjeta(baseDeInicio, horaInicio, minutosDeRecorrido){

        /*this._baseDeInicio = baseDeInicio;
        this._horaInicio = horaInicio;
        this._minutosDeRecorrido = minutosDeRecorrido;*/

        if(this._inicio!== null){

            let temp = this._inicio;
            let contadorTiempo = 0;
            let minutos = 0;
            let rutas = "";
            let tiempoRecorrido = horaInicio;

            while(temp._name!==baseDeInicio){

                temp = temp._siguiente;
            }

            while(contadorTiempo<minutosDeRecorrido){

                while((contadorTiempo + temp._time) < minutosDeRecorrido){

                    
                    if(minutos + temp._time < 60){

                        contadorTiempo += temp._time;
                        minutos += temp._time;
                        rutas += temp.info() +" " + tiempoRecorrido +":"+ minutos +'\n';
                        temp = temp._siguiente;

                    }else{

                        minutos = minutos - 60;
                        if(minutos<0){

                            minutos = minutos * -1;
                        };
                        tiempoRecorrido += 1;
                        rutas += temp.info() +" " + tiempoRecorrido +":"+ minutos +'\n';
                        temp = temp._siguiente;

                    };
                    

                

                    
                }

                return rutas;
                
            }

            

            




        }

        


    };



};