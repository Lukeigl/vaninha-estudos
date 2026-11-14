import {unseal} from './crypto.mjs';
const form=document.querySelector('#login'),button=document.querySelector('#submit'),status=document.querySelector('#login-status');
document.querySelector('#show-password').addEventListener('click',e=>{const input=form.elements.password;input.type=input.type==='password'?'text':'password';e.target.textContent=input.type==='password'?'Mostrar':'Ocultar';e.target.setAttribute('aria-label',input.type==='password'?'Mostrar senha':'Ocultar senha')});
form.addEventListener('submit',async e=>{e.preventDefault();if(button.disabled)return;button.disabled=true;status.className='status';status.textContent='Carregando seu material…';let bundle;
try{if(!globalThis.crypto?.subtle)throw Error('HTTPS required');const r=await fetch('./content.enc.json');if(!r.ok)throw Error('Load failed');bundle=await r.json()}catch{status.textContent='Não foi possível carregar. Confira sua conexão e abra o endereço por HTTPS.';button.disabled=false;return}
let data;try{status.textContent='Abrindo seu espaço…';data=JSON.parse(await unseal(bundle,form.elements.username.value,form.elements.password.value))}catch{status.textContent='Usuário ou senha incorretos. Confira os dados e tente novamente.';status.classList.add('error');form.elements.password.value='';form.elements.password.focus();button.disabled=false;return}
form.elements.password.value='';try{const {mount}=await import('./app.mjs');mount(data)}catch{status.textContent='O material abriu, mas a página não carregou. Atualize para tentar novamente.';button.disabled=false}
});
