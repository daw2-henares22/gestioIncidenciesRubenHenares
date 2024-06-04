import { panel } from "../vistas/panel"
import { login } from "../vistas/login"
import { registre } from "../vistas/registre"
import { vistaComentarios } from "../vistas/vistacomentarios"
export const header ={
    template:`
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div class="quitarPagina">
          <button type="submit" class="btn btn-secondary ms-2" id="btnPanel">PANEL</button>
          <button type="submit" class="btn btn-secondary ms-2" id="btnComentarios">COMENTARIOS</button>
          <button type="submit" class="btn btn-secondary ms-2" id="btnLog">LOGIN</button>
          <button type="submit" class="btn btn-secondary ms-2" id="btnReg">REGISTRO</button>
          <span class="bg-success ms-2" id="logout"></span>
        </div>
        <div>
          <span id="correoUsuario"></span>
          
        </div>
      </div>
    </nav>
  
    `,

    script:()=>{
        document.querySelector('#btnComentarios').addEventListener('click', ()=>{
        document.querySelector('main').innerHTML=vistaComentarios.template
        vistaComentarios.script() 
            })

            document.querySelector('#btnPanel').addEventListener('click', ()=>{
              document.querySelector('main').innerHTML=panel.template
              panel.pintarTickets() 
                     })

      document.querySelector('#btnLog').addEventListener('click',()=>{
        document.querySelector('main').innerHTML=login.template
        login.script()
      })
      document.querySelector('#btnReg').addEventListener('click', ()=>{
        document.querySelector('main').innerHTML=registre.template
        registre.script()
      })
    }
}
