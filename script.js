let listaMusicas=[];
function adicionarMusica(){const i=document.getElementById('musica');const l=i.value.split('\n').map(x=>x.trim()).filter(Boolean);if(!l.length)return alert('Digite músicas');l.forEach(m=>{if(!listaMusicas.includes(m))listaMusicas.push(m)});i.value='';atualizarLista();}
function atualizarLista(){const ul=document.getElementById('lista');ul.innerHTML='';listaMusicas.forEach((m,i)=>{const li=document.createElement('li');li.innerHTML=`<span>${i+1}. ${m}</span><button onclick="removerMusica(${i})">❌</button>`;ul.appendChild(li)});document.getElementById('contador').textContent='Total de músicas: '+listaMusicas.length;}
function removerMusica(i){listaMusicas.splice(i,1);atualizarLista();}
function limparLista(){listaMusicas=[];atualizarLista();}
function enviarLista(){alert('Configure seu número no script.js e continue evoluindo o projeto.');}
