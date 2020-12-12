localStorage.setItem("mensagemEsc", "")
localStorage.setItem("mensagemRec", "")
var mensagem = "";

var enviada, recebida;
var nome = prompt('Qual seu nome');

function enviar(){
    if(document.querySelector("#escreve").value !== ""){
        mensagem = document.querySelector("#escreve").value;
        localStorage.setItem("mensagemEsc", mensagem)
        localStorage.setItem("mensagemRec", `<div id='nomeRec'><div id='nr'>${nome}</div><div class='recebida'><div id='mensRec'>${mensagem}</div><span id='horaRec'>18:39</span></div></div>`);
        enviada = `<div id='nomeEnv'><div id='ne'>${nome}</div><div class='enviada'><div id='mensEnv'>${mensagem}</div><span id='horaEnv'>18:39</span></div></div>`;
        document.querySelector("#mensagens").innerHTML += enviada;
        document.querySelector("#escreve").value = "";
    }
    document.getElementById("escreve").focus();
    return false
}

setInterval(function(){
    recebida = localStorage.getItem("mensagemRec")

    if(recebida.value !== ""){
        if(localStorage.getItem("mensagemEsc") !== mensagem){

            recebida = localStorage.getItem("mensagemRec");
            document.querySelector('#mensagens').innerHTML += recebida;
            localStorage.setItem("mensagemRec", "")
            localStorage.setItem("mensagemEsc", "")
            mensagem = ""

        }
    }
  }, 250);