var contador = 0;

function f1(){
  var inNome = document.getElementById("nome")
  var nome = inNome.value;

  inNome.style.display = "none";

  contador = contador + 1;
  var divOut = document.getElementById("out");
  divOut.innerHTML = nome + " clicou " + contador + " vezes."; 
}

function f2(){
  contador = 0;
  var divOut = document.getElementById("out");
  divOut.innerHTML = "Clicou " + contador + " vezes."; 
}
