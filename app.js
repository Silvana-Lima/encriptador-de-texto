
//////******* FUNCION OCULTAR MUÑECO ******//////

function ocultar() {
  document.getElementById("cont-ocultar").style.display = "none";
  document.getElementById("cont-output").style.display = "block";
}


//////******* FUNCION ENCRIPTAR ******//////

var textarea = document.querySelector("textarea");
textarea.focus();
var mensaje = document.getElementById("txt-desencriptado");

function encriptar() {
  var acc = "";

  for (var j = 0; j < textarea.value.length; j++) {
    var letra = textarea.value[j];

    if (letra == "a") {
      var letra = "ai";
    } else if (letra == "e") {
      var letra = "enter";
    } else if (letra == "i") {
      var letra = "imes";
    } else if (letra == "o") {
      var letra = "ober";
    } else if (letra == "u") {
      var letra = "ufat";
    } else {
      var letra = textarea.value[j];
    }

    acc = acc + `${letra}`;
  }
  mensaje.innerHTML = acc;
  textarea.value = "";
  textarea.focus();
}

//////******* FUNCION DESENCRIPTAR ******//////

function desencriptarBtn() {
  const TextoAdesencriptar = desencriptarTxt(textarea.value);
  mensaje.value = TextoAdesencriptar;
  textarea.value = "";
}

function desencriptarTxt(stringDesencriptar) {
  var reemplazar = [["a", "ai"],["e", "enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];

  for (var z = 0; z < reemplazar.length; z++) {
    if (stringDesencriptar.includes(reemplazar[z][1])) {
      stringDesencriptar = stringDesencriptar.replaceAll(reemplazar[z][1],reemplazar[z][0]);
    }
  }
  return stringDesencriptar;
}

////----****>>>>BOTON COPIAR<<<<****----////

function copy() {
  var copyText = document.querySelector("#txt-desencriptado");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);



