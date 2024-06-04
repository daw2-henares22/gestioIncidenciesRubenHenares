import { login } from "./login";
import { usuariosRegistrados } from "./comentariosbd";

export const registre = {
  template: `
<main class="container mt-5">
  <div class="pt-5">
    <h1 class="w-100 text-center">Registro</h1>
    <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
      <label for="email" class="mt-2 form-label">Email: </label>
      <input id="emailRegistro" type="text" class="form-control" placeholder="usuario@mail.com">

      <label for="contraseña" class="mt-2 form-label">Contraseña: </label>
      <input id="passwordRegistro" type="password" class="form-control">

      <button id="btnEntrarRegistro" type="submit" class="btn btn-primary w-100 mt-4">Enviar</button>
    </form>
  </div>
</main>
  `,
  script: () => {
    document.querySelector('#btnPanel').style.display = 'none';
    document.querySelector('#btnComentarios').style.display = 'none';

    document.querySelector('#btnEntrarRegistro').addEventListener('click', (event) => {
      event.preventDefault()

      const email = document.querySelector('#emailRegistro').value
      const contraseña = document.querySelector('#passwordRegistro').value

      if(email === '' || contraseña === ''){//revisar si tiene un dato o no
        Swal.fire({
          icon: 'error',
          title: 'Rellene todos los campos!!'
        })
        return;
      }
      if(usuariosRegistrados.find(usuario => usuario.email === email)){
        Swal.fire({
          icon: 'error',
          title: 'El usuario ya está registrado'
        })
        return
      }
      const nuevoUsuario = {email, contraseña}
      usuariosRegistrados.push(nuevoUsuario)


      const usuariosGuardados = JSON.stringify(usuariosRegistrados)

      localStorage.setItem('usuarios', usuariosGuardados)

      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado',
        text: '¡Gracias por registrarte!',
      }).then(()=>{ //una vez lo hemos guardado en el localStorage, hará lo siguiente
        // Recoger los valores de la cadena del localStorage y mostrarlos en la consola
        const nuevoUsuariosGuardados = localStorage.getItem('usuarios')
        console.log(nuevoUsuariosGuardados);

        const parseado = JSON.parse(nuevoUsuariosGuardados); // Recuperar la cadena de strings y lo convierte en un objeto
        console.log(parseado);

        document.querySelector('main').innerHTML=login.template //cargo el login template
        login.script()  //tmbn cargo su funcionabilidad
            
      })
      })
  }
};