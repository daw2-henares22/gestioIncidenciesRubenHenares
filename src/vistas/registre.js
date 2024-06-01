import { login } from "./login"

export const registre = {
  template:`
<main class="container mt-5">
  <div class="pt-5">
    <h1 class="w-100 text-center">Registro</h1>
    <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
      <label for="email" class="mt-2 form-label">User: </label>
      <input id="email" type="text" class="form-control" placeholder="usuario@mail.com">

      <label for="pass" class="mt-2 form-label">Contraseña: </label>
      <input id="contraseña" type="password" class="form-control">

      <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
      <button id="buttonRegistro" type="" class="btn btn-primary w-100">Enviar</button>
    </form>
  </div>
</main>



// <!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div class="modal-dialog">
//   <div class="modal-content">
//     <div class="modal-header">
//       <h5 class="modal-title" id="exampleModalLabel">Observaciones</h5>
//       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//     </div>
//     <div class="modal-body">
//       <p>Código incidencia: <span>123546</span></p>
//       <label for="comentario" class="form-label">Comentario:</label> 
//       <input class="form-control">Estee es un comentario sobre esta incidencia</input>
//       <p class="small text-end">Autor: <span>Pepe Loco</span></p>
//     </div>
//     <div class="modal-footer">

//       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
//       <button type="button" class="btn btn-primary">Guardar cambios</button>
//     </div>
//   </div>
// </div>
// </div>
// </div>
  `,

  script:()=>{
    document.querySelector('#buttonRegistro').addEventListener('click', (event) => {
  
      event.preventDefault
      let usuarios = localStorage.getItem("usuarios")

      if (usuarios) {
        usuarios = JSON.parse(usuarios)
      } else {
        usuarios = []
      }

      let email = document.querySelector("#email").value
      let contraseña = document.querySelector("#contraseña").value

      const usuario = {
        mail: email,
        contr: contraseña
      }

      if(usuarios.length ==0){
        usuarios.push(usuario)
        localStorage.setItem("usarios", JSON.stringify(usuarios))
        document.querySelector('main').innerHTML= login.template
        login.script()
      }else{
        usuarios.forEach(element =>{
          if(element.mail != email){
            usuarios.push(usuario)
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            document.querySelector('main').innerHTML=login.template
            login.script()

          }else{
            alert('Pusiste un dato incorrecto')
          }
        })

      }
    })
  }
}