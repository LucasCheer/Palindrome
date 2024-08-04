
// Vinculo el boton con el script

const userInput = document.getElementById("text-input");
const texxto = document.getElementById("textText");
const buttonBtn = document.querySelector("#check-btn");
const result = document.getElementById("resultText")


//inicializo el button

buttonBtn.onclick = asignarVar;

//Funcion principal
function asignarVar(){
    let dato = userInput.value;
    let variableGuardada = dato;
    if(variableGuardada === ""){
        alert("Please input a value");
    }
    else{
        let variableGuardada2 = cleanStr(variableGuardada)
        let cadenaInvertida = invertStr(variableGuardada2)
        if(cadenaInvertida === variableGuardada2){
            result.innerText = variableGuardada + " is a palindrome"
        }
        else{
            result.innerText = variableGuardada + "  is not a palindrome"
        }
    }
}

//Funciones

function invertStr(cad) {
    var separarCadena = cad.split("");
    var invertirArreglo = separarCadena.reverse(); 
    var unirArreglo = invertirArreglo.join(""); 
   return unirArreglo; 
}

function cleanStr(variable){
    var cleanvariable = variable.replace(/[^a-zA-Z0-9]/g, "");
    var lowerCase = cleanvariable.toLowerCase();
    return lowerCase;
}
