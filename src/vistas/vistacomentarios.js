import { comentario } from "../components/comentario"
import { panel } from "./panel"
import { comentariosBd } from "./comentariosbd";

export const vistaComentarios = {
    template:`
    <main class="container mt-5">
    <div class="d-flex">
      <h1>Comentarios</h1>
      <button id="volver" class="btn btn-link ms-auto"> < Volver</button>
    </div>
    
    <h2 class="my-4">Código ticket: <span>123456</span></h2>
    <div class="">
      <form action="" class="form card p-3 shadow" id="comentarioForm">
      <label for="autor" class="form-label">Autor: </label>
      <input id="autor" type="text" class="form-control mb-3">
      <label for="comentario" class="form-label">Comentario: </label>
      <textarea id="comentario" class="form-control" col="3"></textarea>
      <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
      <div class="d-flex align-items-center">
        <input id="fecha" type="datetime-local" class="form-control w-25">
        <button id="btnAñadirComentario" type="button" class="btn btn-success ms-auto">Añadir comentario</button>
      </div>
    </form>
  
    <div class="mt-4" id="comentariosTexto">
      
    </div>
  </div>
      
    
  </main>
    `,
    script: () => {
      document.querySelector('#volver').addEventListener('click', () => {
        document.querySelector('main').innerHTML = panel.template;
        panel.pintarTickets();
      });
  
      // Aqui lo que estoy haciendo es mostrar los comentarios de la bd
      const comentariosTexto = document.querySelector('#comentariosTexto');
      comentariosTexto.innerHTML = obtenerComentariosHtml();
  
      // Agregar evento para añadir comentario
      document.querySelector('#btnAñadirComentario').addEventListener('click', () => { //click en el boton
        console.log('Estas añadiendo un comentario')
        const autor = document.querySelector('#autor').value; //cogemos valor de los inputs
        const fecha = document.querySelector('#fecha').value; //cogemos valor de los inputs
        const comentarioText = document.querySelector('#comentario').value; //cogemos valor de los inputs
  
        if (autor && fecha && comentarioText) { //creamos los comentarios con los valores de los inputs
          const nuevoComentarioHtml = comentario(autor, fecha, comentarioText);
          comentariosTexto.innerHTML += nuevoComentarioHtml; //añadimos los comentarios 
          document.querySelector('#autor').value = '';
          document.querySelector('#comentario').value = '';
          document.querySelector('#fecha').value = '';
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Rellene todos los campos para poder añadir un comentario"
          })
        }
      });
    }
  };
  
  // aqui recojo los comentarios de la base de datos
  function obtenerComentariosHtml() {
    let html = '';
    comentariosBd.forEach(com => {
      html += comentario(com.autor, com.fecha, com.comentario);
    });
    return html;
  }