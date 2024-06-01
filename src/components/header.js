import { panel } from "../vistas/panel"
import { login } from "../vistas/login"
import { registre } from "../vistas/registre"
export const header ={
    template:`
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div class="quitarPagina">
          <button class="btn btn-secondary ms-2 panelButton">PANEL</button>
          <button class="btn btn-secondary ms-2 loginButton">LOGIN</button>
          <button class="btn btn-secondary ms-2 registreButton">REGISTRO</button>
        </div>
        <div>
          <span>administrador@fpllefia.com</span>
          
        </div>
      </div>
    </nav>
  
    `,

    script:()=>{
      document.querySelector('.panelButton').addEventListener('click',()=>{
          document.querySelector('main').innerHTML=panel.template
          vistaPanel.script()
      })
      document.querySelector('.loginButton').addEventListener('click',()=>{
        document.querySelector('main').innerHTML=login.template
        login.script()
      })
      document.querySelector('.registreButton').addEventListener('click', ()=>{
        document.querySelector('main').innerHTML=registre.template
      })
    }
}
