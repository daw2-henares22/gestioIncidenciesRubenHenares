// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'

import { header } from './components/header.js';
import { panel } from "./vistas/panel.js";

document.querySelector('header').innerHTML = header.template
header.script()

document.querySelector('main').innerHTML = panel.template
panel.pintarTickets() 