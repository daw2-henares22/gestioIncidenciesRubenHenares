import { registre } from "./registre";
import { panel } from "./panel";
import { vistaComentarios } from "./vistacomentarios";
import { header } from "../components/header";
import { tickets } from "./ticketsbd";
import { usuariosRegistrados } from "./comentariosbd";

export const login = {
  template: `
<main class="container mt-5">
  <div class="pt-5">
    <h1 class="w-100 text-center">Login</h1>
    <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
      <label for="email" class="mt-2 form-label">Email: </label>
      <input id="emailLogin" type="text" class="form-control" placeholder="usuario@mail.com">

      <label for="contraseña" class="mt-2 form-label">Contraseña: </label>
      <input id="passwordLogin" type="password" class="form-control">

      <button id="btnEntrarLogin" type="submit" class="btn btn-primary w-100 mt-4">Enviar</button>
    </form>
  </div>
</main>
  `,
  script: () => {
    document.querySelector('#btnPanel').style.display = 'none';
    document.querySelector('#btnComentarios').style.display = 'none'
    document.querySelector('#Logout').style.display = 'none';

    const usuariosGuardados = localStorage.getItem('usuarios'); //recupero los usuarios que hay en el localstorage, sin parsear es decir en la cadena
        const usuariosGuardadosParse = JSON.parse(usuariosGuardados) //convierto la cadena en un objeto
        console.log('usuarios disponibles para hacer login del localstorage', usuariosGuardadosParse); //saco el objeto
        console.log('usuarios disponibles para hacer login de la bbdd   ', usuariosRegistrados); //muetsro la aarray
        
        document.querySelector('#buttonLogin').addEventListener('click', (event)=>{ //evento de click en el boton de login
            event.preventDefault()
            const correo = document.querySelector('#email').value //recogemos valor del corre
            const contraseña = document.querySelector('#contraseña').value //recogemos el valor de la contraseña
            console.log('correo es: ', correo);
            console.log('contraseña es: ', contraseña);

            const usuario = usuariosRegistrados.find(user => user.email === correo && user.contraseña === contraseña) //comprobamos que el usuario ya esté registrado

            if(usuario){ //si el usuario existe, mostramos el mensaje y hacemos lo que está despues del .then
                Swal.fire({
                    icon: "success",
                    title: "Bienvenido",
                    showConfirmButton: false,
                    timer: 1500
                  }).then(()=>{
                    document.querySelector('main').innerHTML=panel.template //cargar pantalla principal
                    panel.pintarTickets() //la funcionalidad tmbn
                    document.querySelector('#buttonLogin').style.display = 'none'; //ocultamos poder ir al panel
                    document.querySelector('#buttonRegistre').style.display = 'none'; //ocultamos poder ir a comentarios
                    document.querySelector('#buttonPanel').style.display = ''; //desocultamos poder ir al panel
                    document.querySelector('#buttonComentarios').style.display = ''; //desocultamos poder ir a comentarios
                  

                    document.querySelector('#logout').innerHTML = '<button id="buttonLogout" class="btn btn-outline-danger my-2 my-sm-0 " type="submit">Logout</button>' //creamos el botón del logout
                    document.querySelector('#correoUsuario').innerHTML = '<p>Bienvenido, ' + correo + '<p/>' //mostramos el correo en el header

                    // LOGOUT
                    document.querySelector('#buttonLogout').addEventListener('click', ()=>{ //evento click en el boton de
                    console.log('estas intentando desloguearte');
                    localStorage.removeItem('usuarios') //borramos el localstorage
                    document.querySelector('main').innerHTML=registre.template //cargamos el template del registro
                    registre.script() //cargamos la funcionalidad del registro
                    document.querySelector('#buttonLogin').style.display = ''; //ocultamos poder ir al panel
                    document.querySelector('#buttonRegistre').style.display = ''; //ocultamos poder ir a comentarios
                    document.querySelector('#buttonPanel').style.display = 'none'; //desocultamos poder ir al panel
                    document.querySelector('#buttonComentarios').style.display = 'none'; //desocultamos poder ir a comentarios
                    document.querySelector('#btnLogout').style.display = 'none'; //desocultamos poder ir a comentarios
                    document.querySelector('#correoUsuario').innerHTML = '' //dejamos de mostrar el correo en el header
                    })

                    //Resolver tickets:
                     // evento
                        const btnResolverArray = document.querySelectorAll('#resolver');
                        btnResolverArray.forEach(btn => {
                        btn.addEventListener('click', () => {
                            const tr = btn.closest('tr'); // Obtener el tr padre 

                            // Mover el tr a la tabla de tickets resueltos
                            document.querySelector('#ticketsResueltos').appendChild(tr);
                            
                            // Ocultar botones Resolver y Editar del ticket resuelto
                            const btnResolver = tr.querySelector('#resolver');
                            const btnEditar = tr.querySelector('#btnEditar');
                            btnResolver.style.display = 'none'; // Ocultar botón Resolver
                            btnEditar.style.display = 'none'; // Ocultar botón Editar
                        });
                        });

                    //Eliminar comentarios resueltos
                    document.querySelector('#ticketsResueltos').addEventListener('click', (event) => {
                        console.log('eliminando comentarios resueltos');
                        // Este evento se activa cuando se hace clic en cualquier parte del tbody
                        const boton = event.target.closest('.btnEliminarResueltos'); // Encuentra el btn mas cercano que tenga la clase 'btnEliminarResueltos'
                        
                        if (boton) {
                            const fila = boton.closest('tr'); // Encuentra el tr proximo del btn
                    
                            if (fila) {
                                fila.remove(); // Elimina la fila
                            }
                        }
                    });

                    //Eliminar comentarios pendientes
                    document.querySelector('#ticketsPendientes').addEventListener('click', (event) => {
                        console.log('eliminando comentarios pendientes');
                        // Este evento se activa cuando se hace clic en cualquier parte del tbody
                        const boton = event.target.closest('.btnEliminarPendientes'); // Encuentra el btn mas cercano que tenga la clase 'btnEliminarResueltos'
                        
                        if (boton) {
                            const fila = boton.closest('tr'); // Encuentra el tr proximo del btn
                    
                            if (fila) {
                                fila.remove(); // Elimina la fila
                            }
                        }
                    });

                    //Mostrar los comentarios
                    document.querySelector('#ticketsPendientes').addEventListener('click', (event) => {
                        console.log('mostrando comentarios pendiente');
                        // Este evento se activa cuando se hace clic en cualquier parte del tbody
                        const boton = event.target.closest('.btnComentarPendientes'); // Encuentra el btn mas cercano que tenga la clase 'btnEliminarResueltos'
                        
                        if (boton) {
                            const fila = boton.closest('tr'); // Encuentra el tr proximo del btn
                    
                            if (fila) {
                                document.querySelector('main').innerHTML = vistaComentarios.template //carga en el main el template
                                vistaComentarios.script() //junto con su funcionabilidad
                            }
                        }
                    });
                    
                  })

            }else{ //Si el usuario no existe, mostramos este error
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error en las credenciales"
                  })
            }

  })
}
};