const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".output-mensagem");
const input = document.querySelector(".input-texto");

input.addEventListener("keypress", function(e){
    if(!checkChar(e)){
      e.preventDefault();
    }
});

function checkChar(e){
  var char = String.fromCharCode(e.keyCode);
  var pattern = "[a-z ]"
  if (char.match(pattern)){
    return true;
  }
}

function btnEncriptar(){
      const textoEncriptado = encriptar(inputTexto.value);
      mensagem.value= textoEncriptado
      mensagem.style.backgroundImage="none";
}

function btnDencriptar(){
      const textoDencriptado = dencriptar(inputTexto.value);
      mensagem.value= textoDencriptado
      mensagem.style.backgroundImage="none";
}

function encriptar(stringEncriptada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (var i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

    return stringEncriptada

}

function dencriptar(stringDencriptada){
  let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
  stringDencriptada = stringDencriptada.toLowerCase();

  for (var i = 0; i < matrizCodigo.length; i++) {
    if (stringDencriptada.includes(matrizCodigo[i][0])) {
        stringDencriptada = stringDencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

    return stringDencriptada

}

document.getElementById('execCopy').addEventListener('click', execCopy);
function execCopy() {
  document.querySelector(".output-mensagem").select();
  document.execCommand("copy");
}
