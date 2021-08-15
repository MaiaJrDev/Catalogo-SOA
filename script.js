var jaxT = document.getElementById('jax');
var clayM = document.getElementById('clay');
var juice = document.getElementById('juice');
var chibs = document.getElementById('chibs');
var desc1 = document.getElementById('desc1');
var desc2 = document.getElementById('desc2');
var desc3 = document.getElementById('desc3');
var desc4 = document.getElementById('desc4');
var btn = document.getElementById('btnInf');
var btn2 = document.getElementById('btnInf2');
var btn3 = document.getElementById('btnInf3');
var btn4 = document.getElementById('btnInf4');


function infoJax(){
   
    clayM.setAttribute('style', 'display:none');
    chibs.setAttribute('style', 'display:none');
    juice.setAttribute('style', 'display:none');
    desc1.setAttribute('style', 'display: block');
    btn.setAttribute('style', 'display:none');
    let criaBtn = document.createElement('button');
    let boron = document.getElementById('btnVoltar1').appendChild(criaBtn);
    boron.setAttribute('class', 'btn btn-info');
    boron.setAttribute('onclick', 'window.location.reload();')
    boron.innerText = "VOLTAR";

}

function infoClay(){
   
    jaxT.setAttribute('style', 'display:none');
    juice.setAttribute('style', 'display:none');
    chibs.setAttribute('style', 'display:none');
    desc2.setAttribute('style', 'display: block');
    btn2.setAttribute('style', 'display:none');
    let criaBtn = document.createElement('button');
    let boron = document.getElementById('btnVoltar2').appendChild(criaBtn);
    boron.setAttribute('class', 'btn btn-info');
    boron.setAttribute('onclick', 'window.location.reload();')
    boron.innerText = "VOLTAR";
    

}
function infoJuice(){
   
    jaxT.setAttribute('style', 'display:none');
    chibs.setAttribute('style', 'display:none');
    clayM.setAttribute('style', 'display:none');
    desc3.setAttribute('style', 'display: block');
    btn3.setAttribute('style', 'display:none');
    let criaBtn = document.createElement('button');
    let boron = document.getElementById('btnVoltar3').appendChild(criaBtn);
    boron.setAttribute('class', 'btn btn-info');
    boron.setAttribute('onclick', 'window.location.reload();')
    boron.innerText = "VOLTAR";
    

}
function infoChibs(){
   
    jaxT.setAttribute('style', 'display:none');
    clayM.setAttribute('style', 'display:none');
    juice.setAttribute('style', 'display:none');
    desc4.setAttribute('style', 'display: block');
    btn4.setAttribute('style', 'display:none');
    let criaBtn = document.createElement('button');
    let boron = document.getElementById('btnVoltar4').appendChild(criaBtn);
    boron.setAttribute('class', 'btn btn-info');
    boron.setAttribute('onclick', 'window.location.reload();')
    boron.innerText = "VOLTAR";
    

}