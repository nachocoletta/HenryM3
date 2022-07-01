'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise(executor) {   
    if(typeof executor !== 'function'){
        throw new TypeError ('executor deberia ser una function')
    }
    this._state = 'pending';
    this._handlerGroups = [];
    this._value = undefined;



    $Promise.prototype._internalResolve = function(someData){
        if(this._state === 'pending') {
            this._state = 'fulfilled';
            this._value = someData;
            this._callHandlers();
        }
         
        //call  handlers se llama cuando el estado no sea pending 
    };
    $Promise.prototype._internalReject = function(someData){
        if(this._state === 'pending') {
            this._state = 'rejected';
            this._value = someData;
            this._callHandlers();
            this.catch();
        }
    };
            //call  handlers se llama cuando el estado no sea pending  solo se van a acumular si la promesa es pending y no fue resuelta
            //si la promesa fue resuelta o rechazada ahi si se ejecuta call handlers para tomar todos los valores del arreglo hasta vaciarlo

            //test de cuando una promesa ya esté completada entonces se agrega el callHandlers en internal resolve e internal reject


    executor(this._internalResolve.bind(this), this._internalReject.bind(this));


    $Promise.prototype.then = function(successCb, errorCb){
        if (typeof successCb !== 'function') successCb = false
        if (typeof errorCb !== 'function') errorCb = false

        this._handlerGroups.push({
            successCb,
            errorCb,
        })
        if(this._state !== 'pending') this._callHandlers();  // si el estado es distinto de pending llama a call handlers y ejecutalo 

        //si la promesa ya fue resuelta o rechazada e invocas dsp al then no tenes que entrar al resolve o reject xq ya terminaron las promesas
        //entonces si la promesa ya fue resuelta pedis que meta los valores en el arreglo y que ejecute call handlers. entra y sale entra y sale entonces no se acumulan multiples elementos en el arreglo
        

    }

    /* $Promise.prototype._callHandlers = function(){
        if(this._state === 'pending') {
            this._state = 'fulfilled';
            this._value = data;
    while (this._handlerGroups.length > 0) {
        this._callHandlers(this._handlerGroups.shift().successCb)
    
}
        }
    } */
    
    $Promise.prototype._callHandlers = function() {
        while (this._handlerGroups.length > 0) {
            let current = this._handlerGroups.shift();
    if(this._state === 'fulfilled') {
        //llama un success handler pasando el valor de la promesa  THIS._VALUE
        //cuando una promesa tenia un valor y se la pasaba al siguiente su valor para eso es que se pasa aca el this. value 
        current.successCb && current.successCb(this._value);
    } else if(this._state === 'rejected') {
        //llama un success handler pasando el valor de la promesa
        current.errorCb && current.errorCb(this._value);
    }
        }
    }


    $Promise.prototype.catch = function (errorCb) {
    this.then(null, errorCb)
    }

}


module.exports = $Promise;