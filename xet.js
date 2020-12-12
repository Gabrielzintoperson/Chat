sessionStorage.setItem("mensagemEsc", "")
sessionStorage.setItem("mensagemRec", "")
var mensagem = "";

var enviada, recebida;
var nome = prompt('Qual seu nome');

function enviar(){
    if(document.querySelector("#escreve").value !== ""){
        mensagem = document.querySelector("#escreve").value;
        sessionStorage.setItem("mensagemEsc", mensagem)
        sessionStorage.setItem("mensagemRec", `<div id='nomeRec'><div id='nr'>${nome}</div><div class='recebida'><div id='mensRec'>${mensagem}</div><span id='horaRec'>18:39</span></div></div>`);
        enviada = `<div id='nomeEnv'><div id='ne'>${nome}</div><div class='enviada'><div id='mensEnv'>${mensagem}</div><span id='horaEnv'>18:39</span></div></div>`;
        document.querySelector("#mensagens").innerHTML += enviada;
        document.querySelector("#escreve").value = "";
    }
    document.getElementById("escreve").focus();
    return false
}

sessionStorage.setItem("Oi", "mãe")

setInterval(function(){
    recebida = sessionStorage.getItem("mensagemRec")

    if(recebida.value !== ""){
        if(sessionStorage.getItem("mensagemEsc") !== mensagem){

            recebida = sessionStorage.getItem("mensagemRec");
            document.querySelector('#mensagens').innerHTML += recebida;
            sessionStorage.setItem("mensagemRec", "")
            sessionStorage.setItem("mensagemEsc", "")
            mensagem = ""

        }
    }
  }, 250);
