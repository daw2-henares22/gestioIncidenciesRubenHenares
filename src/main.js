// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'

import { header } from './components/header'
import { vistaComentarios } from './vistas/vistacomentarios'

// import { login } from './vista/login'
// import { panel } from './vista/panel'
// import { registre } from './vista/registre'

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = vistaComentarios.template


// document.querySelector('.loginButton').addEventListener('click', function(){
//     quitarPagina();
//     document.querySelector('.loginButton').innerHTML = login.template;
// })

// document.querySelector('.panelButton').addEventListener('click', function(){
//     quitarPagina();
//     document.querySelector('.panelButton').innerHTML = panel.template;
// })

// document.querySelector('.registreButton').addEventListener('click', function(){
//     quitarPagina();
//     document.querySelector('.registreButton').innerHTML = registre.template;
// })

// function quitarPagina(){
//     document.querySelector('.quitarPagina').innerHTML = '';
// }