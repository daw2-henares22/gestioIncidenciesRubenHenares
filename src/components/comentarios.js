import { comentario } from "./comentario";
import { comentariosBd } from "../vistas/comentariosbd";

export const comentarios = {
    script: () =>{
        let html=``
        comentariosBd.forEach(element =>{
            html +=comentario(element.usuario,element.fecha,element.comentario)
        })
        document.querySelector("#comentarios").innerHTML = html
    }

    // let template = ``

    // bd.forEach(element => {
    //     template += comentario(`<h5 class="text-end">Autor: <span>${element.usuario} </span><span class="ms-4">${element.fecha} </span></h5>
    //     <p>${element.comentario}</p>`)
    // })

    // return template
}