import { comentario } from "./comentario";
import { comentariosBd } from "../vistas/comentariosbd";

export const comentarios = {
    template:`
    <div id="comentariosText"
    </div>
    `,

    script: () =>{
        let html=``
        comentariosBd.forEach(item =>{
            html +=comentario(item.autor,item.fecha,item.comentario)
        })
        document.querySelector("#comentariosText").innerHTML = html
    }

    // let template = ``

    // bd.forEach(element => {
    //     template += comentario(`<h5 class="text-end">Autor: <span>${element.usuario} </span><span class="ms-4">${element.fecha} </span></h5>
    //     <p>${element.comentario}</p>`)
    // })

    // return template
}