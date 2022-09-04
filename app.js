var a = "a";
var e = "e";
var i = "i";
var o = "o";
var u = "u";

var textarea = document.querySelector('textarea')
textarea.focus();
var desencriptar = document.getElementById('txt-desencriptado')

function encriptar(){

var acc = ""

 for(var j=0; j<textarea.value.length; j++){
     
  var letra = textarea.value[j]
  
    if (letra == a)  {
    var letra = "ai"
  } 
  else if(letra== e){
  var letra = "enter"
  }
  else if(letra== i){
    var letra = "imes"
  }
  else if(letra== o){
      var letra = "ober"
  }  

  else if(letra== u){
    var letra = "ufat"
    }


  else{
    var letra = textarea.value[j]

  }

 acc = acc + `${letra}`
}
desencriptar.innerHTML = acc;
textarea.value = "";
textarea.focus();
}


// var oculto =document.getElementById("cont-ocultar")

// function ocultar (){

//   oculto.style.display = "none";

// }



var button = document.querySelector("button");
button.onclick = encriptar; ocultar;


