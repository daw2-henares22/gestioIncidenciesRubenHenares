import { tickets } from "./ticketsbd"
import { vistaComentarios } from "./vistacomentarios";

export const panel = {
  template:`
<main class="container mt-5">
  <h1>Administración de incidencias</h1>
  <h2 class="mt-5">Tickets pendientes</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>Código</th>
        <th>Fecha</th>
        
        <th>Aula</th>
        <th>Grupo</th>
        <th>Ordenador</th>
        <th>Descripción</th>
        <th>Alumno</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody id="ticketsPendientes">
      
    </tbody>
  </table>
  <h2 class="mt-5">Tickets resueltos</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>Código</th>
        <th>Fecha</th>
        <th>Fecha resuelto</th>
        <th>Aula</th>
        <th>Grupo</th>
        <th>Ordenador</th>
        <th>Descripción</th>
        <th>Alumno</th>
      </tr>
    </thead>
    <tbody id="ticketsResueltos">
     
    </tbody>
  </table>
</main>
  `,

  pintarTickets:()=>{

    let html1 = ''; // tickets resueltos
    let html2 = ''; // pendientes
    tickets.forEach(item => {
      if(item.estado==='Resuelto'){
        const ticketHTMLResueltos=`
                <td>${item.codigo}</td>
                <td>${item.fecha}</td>
                <td>${item.fecharesuelto}</td>
                <td>${item.aula}</td>
                <td>${item.grupo}</td>
                <td>${item.ordenador}</td>
                <td>${item.descripcion}</td>
                <td>${item.alumno}</td>
                <td><button id="btnComment" class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
                </button></td>
                <td><button id="btnEliminar" class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
                </i>
                </button></td>
        `

        html1 += `<tr>${ticketHTMLResueltos}</tr>`

      }else{
        const ticketHTMLPendientes=`
              <td>${item.codigo}</td>
              <td>${item.fecha}</td>
              <td>${item.aula}</td>
              <td>${item.grupo}</td>
              <td>${item.ordenador}</td>
              <td>${item.descripcion}</td>
              <td>${item.alumno}</td>
              </td>
              <td><button id="Resolver" type="button" class="btn btn-success" title="Resolver ticket">Resolver</button></td>
              <td><button id="btnEditar" type="button" class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
              </button>
              </td>
              <td><button type="button" class="btn btn-info btnComentarPendientes" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
              </button></td>
              <td><button type="button" class="btn btn-danger btnEliminarPendientes" title="Eliminar ticket"><i class="bi bi-trash3"></i>
              </i>
              </button></td>`
            html2 += `<tr>${ticketHTMLPendientes}</tr>`
      }

    })

    document.querySelector('#ticketsResueltos').innerHTML = html1;
    document.querySelector('#ticketsPendientes').innerHTML = html2;
  
     // Agregar evento a los botones de comentar resueltos
  const btnComentarResueltos = document.querySelectorAll('.btnComentarResueltos');
  btnComentarResueltos.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('Dandole al botón para ver los comentarios de los tickets resueltos');
      document.querySelector('main').innerHTML = vistaComentarios.template;
      vistaComentarios.script();
    });
  });

  // Agregar evento a los botones de comentar pendientes
  const btnComentarPendientes = document.querySelectorAll('.btnComentarPendientes');
  btnComentarPendientes.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('Dandole al botón para ver los comentarios de los tickets pendientes');
      document.querySelector('main').innerHTML = vistaComentarios.template;
      vistaComentarios.script();
    });
  });
  
  
  
  
  
  }

}