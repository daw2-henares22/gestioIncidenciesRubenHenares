import { datosBd } from "./bd"

export const vistaComentarios = {
    template:`
    <main class="container mt-5">
    <div class="d-flex">
      <h1>Comentarios</h1><button class="btn btn-link ms-auto"> < Volver</button>
    </div>
    
    <h2 class="my-4">Código ticket: <span>123456</span></h2>
    <div class="">
      <form action="" class="form card p-3 shadow">
        <label for="comentario" class="form-label">Comentario: </label>
        <textarea class="form-control" col="3"></textarea>
        <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
        <div class="d-flex align-items-center">
          <input type="datetime-local" class="form-control w-25">
          <button class="btn btn-success ms-auto">Añadir comentario</button>
        </div>
      </form>

      <div class="mt-4">
        <div class="card p-3">
          <h5 class="text-end">Autor: <span>${datosBd[0].usuario}</span><span class="ms-4">${datosBd[0].fecha}</span></h5>
        <p>${datosBd[0].comentario}</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>${datosBd[1].usuario}</span><span class="ms-4">${datosBd[1].fecha}</span></h5>
        <p>${datosBd[1].comentario}</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>${datosBd[2].usuario}</span><span class="ms-4">${datosBd[2].fecha}</span></h5>
        <p>${datosBd[2].comentario}</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>${datosBd[3].usuario}</span><span class="ms-4">${datosBd[3].fecha}</span></h5>
        <p>${datosBd[3].comentario}</p>
        </div>
        
        
      </div>
    </div>
    
  </main>
    `
}