//Variables operaciones
let numeroA = 0;
let numeroB = 0;
let operacion ;
let resultadoOp = 0;
//Borrar un numero
let cifras = 0;
//Funcion inicializar elementos mediante su id
function calculadora(){
    //Variables
    const resultado = document.getElementById("resultado");
    const reset = document.getElementById("reset");
    const suma = document.getElementById("suma");
    const resta = document.getElementById("resta");
    const multiplicacion = document.getElementById("multiplicacion");
    const division = document.getElementById("division");
    const igual = document.getElementById("igual");
    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");
    const tres = document.getElementById("tres");
    const cuatro = document.getElementById("cuatro");
    const cinco = document.getElementById("cinco");
    const seis = document.getElementById("seis");
    const siete = document.getElementById("siete");
    const ocho = document.getElementById("ocho");
    const nueve = document.getElementById("nueve");
    const cero = document.getElementById("cero");
    const punto = document.getElementById("punto");
    const negativo = document.getElementById("negativo");
    const borrar = document.getElementById("borrar");
    const potencia = document.getElementById("potencia");

    //Eventos numeros
    cero.addEventListener("click", numCero)
    function numCero(e){
        if(resultado.textContent != "-"){
            resultado.textContent = resultado.textContent +  "0";
        }
    }
    uno.addEventListener("click",numUno)
    function numUno(e){
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.addEventListener("click",numDos)
    function numDos(e){
        resultado.textContent = resultado.textContent +  "2";
    }
    tres.addEventListener("click",numTres)
    function numTres(e){
        resultado.textContent = resultado.textContent +  "3";
    }
    cuatro.addEventListener("click",numCuatro)
    function numCuatro(e){
        resultado.textContent = resultado.textContent +  "4";
    }
    cinco.addEventListener("click",numCinco)
    function numCinco(e){
        resultado.textContent = resultado.textContent +  "5";
    }
    seis.addEventListener("click",numSeis)
    function numSeis(e){
        resultado.textContent = resultado.textContent +  "6";
    }
    siete.addEventListener("click",numSiete)
    function numSiete(e){
        resultado.textContent = resultado.textContent +  "7";
    }
    ocho.addEventListener("click",numOcho)
    function numOcho(e){
        resultado.textContent = resultado.textContent +  "8";
    }
    nueve.addEventListener("click",numNueve)
    function numNueve(e){
        resultado.textContent = resultado.textContent +  "9";
    }
    punto.addEventListener("click",puntoF)
    function puntoF(e){
        resultado.textContent = resultado.textContent +  ".";
    }
    negativo.addEventListener("click",negativoF)
    function negativoF(e){
        if(resultado.textContent == ""){
            resultado.textContent = resultado.textContent +  "-";
        }
    }
    //Evento  resetear
    reset.addEventListener("click",resetear)
    //Evento tomar primer numero
    suma.addEventListener("click",sumaF)
    function sumaF(e){
        if (resultado.textContent !=""){
            numeroA = resultado.textContent;
            operacion = "+";
            limpiar();
        }
    }
    resta.addEventListener("click",restaF)
    function restaF(e){
        if (resultado.textContent !=""){
            numeroA = resultado.textContent;
            operacion = "-";
            limpiar();
        }
    }
    multiplicacion.addEventListener("click",multiplicacionF)
    function multiplicacionF(e){
        if (resultado.textContent !=""){
            numeroA = resultado.textContent;
            operacion = "*";
            limpiar();
        }
    }
    division.addEventListener("click",divisionF)
    function divisionF(e){
        if (resultado.textContent !=""){
            numeroA = resultado.textContent;
            operacion = "/";
            limpiar();
        }
    }
    potencia.addEventListener("click",potenciaF)
    function potenciaF(e){
        if (resultado.textContent !=""){
            numeroA = resultado.textContent;
            operacion = "^";
            limpiar();
        }
    }
    //Evento resolver operacion llamando la funcion resolver
    igual.addEventListener("click",resolverF)
    function resolverF(e){
        if(resultado.textContent != ""){
            numeroB = resultado.textContent;
            resolver();
        }else{
            resultado.textContent = "";
        }
    }    
    borrar.addEventListener("click",borrarF)
}
//llama la funcion calculadora
calculadora();
//funcion limpiar para limpiar la pantalla de resultado
function limpiar(e){
    resultado.textContent = "";
}
function borrarF(e){
    numeroA = resultado.textContent;
    cifras = numeroA.length;
    numeroA=numeroA.substr(0,cifras-1);
    resultado.innerHTML=numeroA;
    //  substr es una función básica
    //  de muchos lenguajes de programación. 
    //  Se utiliza para obtener una parte específica 
    //  de una cadena de caracteres.
}

//funcion para resetear todo
function resetear(e){
    resultado.textContent = "";
    numeroA = 0;
    numeroB = 0;
    operacion = "";
}
//funcion para resolver las operaciones, al final se llama la funcion resetear 
//y se muestra el resultado final
function resolver(e){
    if(operacion == "+"){
        resultadoOp = parseFloat(numeroA) + parseFloat(numeroB);
    }
    else if(operacion == "-"){
        resultadoOp = parseFloat(numeroA) - parseFloat(numeroB);
    }
    else if(operacion == "*"){
        resultadoOp = parseFloat(numeroA) * parseFloat(numeroB);
    }
    else if(operacion == "/"){
        if(numeroB != 0){
            resultadoOp = parseFloat(numeroA) / parseFloat(numeroB);
        }
        else{
            alert("Error de sintaxis");
        }
    }
    else if(operacion =="^"){
        resultadoOp = Math.pow(parseFloat(numeroA),parseFloat(numeroB));
    }
    resetear();
    resultado.textContent = resultadoOp;
}