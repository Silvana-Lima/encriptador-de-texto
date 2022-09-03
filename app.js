var a = "ai";
var e = "enter";
var i = "imes";
var o = "ober";
var u = "ufat";
var input = document.querySelector("input");
input.focus();

function verificar() {
  if (input.value == a) {
    alert("Usted acertó");
  } else {
    alert("Usted erró");
  }

  input.value = "";
  input.focus();
}

var button = document.querySelector("button");
button.onclick = verificar;
