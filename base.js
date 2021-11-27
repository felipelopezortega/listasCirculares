export default class Base{

    constructor(name, time){

        this._name = name;
        this._time = time;
        this._anterior = null;
        this._siguiente = null; 
    }

    info(){
        
        return this._name + '-> (' + this._time + ')';
        // nombre -> (tiempo)
    }

    trabajar(){

      this.ciclos--;
    }
}