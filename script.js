var jaxT = document.getElementById('jax');
var clayM = document.getElementById('clay');

var btn = [];
//cria um array com as informações dos botões
for(var a = 0; a <= 8; a++){
   btn[a] = document.getElementById('btnInf' +a);

}


function infoJax(){
    //oculta todos os outros personagens
    clayM.setAttribute('style', 'display:none');
    chibs.setAttribute('style', 'display:none');
    juice.setAttribute('style', 'display:none');
    tig.setAttribute('style', 'display: none');
    happy.setAttribute('style', 'display: none');
    bob.setAttribute('style', 'display:none');
    opie.setAttribute('style', 'display:none');
    //exibe a descrição
    desc1.setAttribute('style', 'display: block');
    //oculta o botão de informações
    btn[1].setAttribute('style', 'display:none');
    //cria o botão para voltar
    let criaBtn = document.createElement('button');
    let boron = document.getElementById('btnVoltar1').appendChild(criaBtn);
    //atribui a classe do bootstrap ao botão
    boron.setAttribute('class', 'btn btn-info');
    //define a função do botão
    boron.setAttribute('onclick', 'window.location.reload();')
    boron.innerText = "VOLTAR";

}

function infoClay(){
   
    jaxT.setAttribute('style', 'display:none');
    juice.setAttribute('style', 'display:none');
    chibs.setAttribute('style', 'display:none');
    tig.setAttribute('style', 'display: none');
    happy.setAttribute('style', 'display: none');
    bob.setAttribute('style', 'display:none');
    opie.setAttribute('style', 'display:none');
    desc2.setAttribute('style', 'display: block');
    btn[2].setAttribute('style', 'display:none');
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
    tig.setAttribute('style', 'display: none');
    happy.setAttribute('style', 'display: none');
    bob.setAttribute('style', 'display:none');
    opie.setAttribute('style', 'display:none');
    desc3.setAttribute('style', 'display: block');
    btn[3].setAttribute('style', 'display:none');
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
    tig.setAttribute('style', 'display: none');
    happy.setAttribute('style', 'display: none');
    bob.setAttribute('style', 'display:none');
    opie.setAttribute('style', 'display:none');
    desc4.setAttribute('style', 'display: block');
    btn[4].setAttribute('style', 'display:none');
    let criaBtn = document.createElement('button');
    let boron = document.getElementById('btnVoltar4').appendChild(criaBtn);
    boron.setAttribute('class', 'btn btn-info');
    boron.setAttribute('onclick', 'window.location.reload();')
    boron.innerText = "VOLTAR";
    

}
function infoTig(){
   
    jaxT.setAttribute('style', 'display:none');
    clayM.setAttribute('style', 'display:none');
    juice.setAttribute('style', 'display:none');
    chibs.setAttribute('style', 'display:none');
    happy.setAttribute('style', 'display: none');
    bob.setAttribute('style', 'display:none');
    opie.setAttribute('style', 'display:none');
    desc5.setAttribute('style', 'display: block');
    btn[5].setAttribute('style', 'display:none');
    let criaBtn = document.createElement('button');
    let boron = document.getElementById('btnVoltar5').appendChild(criaBtn);
    boron.setAttribute('class', 'btn btn-info');
    boron.setAttribute('onclick', 'window.location.reload();')
    boron.innerText = "VOLTAR";
    

}
function infoHappy(){
   
    jaxT.setAttribute('style', 'display:none');
    clayM.setAttribute('style', 'display:none');
    juice.setAttribute('style', 'display:none');
    chibs.setAttribute('style', 'display:none');
    bob.setAttribute('style', 'display:none');
    tig.setAttribute('style', 'display:none');
    opie.setAttribute('style', 'display:none');
    desc6.setAttribute('style', 'display: block');
    btn[6].setAttribute('style', 'display:none');
    let criaBtn = document.createElement('button');
    let boron = document.getElementById('btnVoltar6').appendChild(criaBtn);
    boron.setAttribute('class', 'btn btn-info');
    boron.setAttribute('onclick', 'window.location.reload();')
    boron.innerText = "VOLTAR";
    

}
function infoBob(){
   
    jaxT.setAttribute('style', 'display:none');
    clayM.setAttribute('style', 'display:none');
    juice.setAttribute('style', 'display:none');
    chibs.setAttribute('style', 'display:none');
    tig.setAttribute('style', 'display:none');
    happy.setAttribute('style', 'display:none');
    opie.setAttribute('style', 'display:none');
    desc7.setAttribute('style', 'display: block');
    btn[7].setAttribute('style', 'display:none');
    let criaBtn = document.createElement('button');
    let boron = document.getElementById('btnVoltar7').appendChild(criaBtn);
    boron.setAttribute('class', 'btn btn-info');
    boron.setAttribute('onclick', 'window.location.reload();')
    boron.innerText = "VOLTAR";
    

}
function infoOpie(){
   
    jaxT.setAttribute('style', 'display:none');
    clayM.setAttribute('style', 'display:none');
    juice.setAttribute('style', 'display:none');
    chibs.setAttribute('style', 'display:none');
    tig.setAttribute('style', 'display:none');
    bob.setAttribute('style', 'display:none');
    happy.setAttribute('style', 'display:none');
    desc8.setAttribute('style', 'display: block');
    btn[8].setAttribute('style', 'display:none');
    let criaBtn = document.createElement('button');
    let boron = document.getElementById('btnVoltar8').appendChild(criaBtn);
    boron.setAttribute('class', 'btn btn-info');
    boron.setAttribute('onclick', 'window.location.reload();')
    boron.innerText = "VOLTAR";
    

}