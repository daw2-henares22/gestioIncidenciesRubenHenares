import { comentario } from "./comentario";

export const comentarios = (bd) => {
    let template = ``

    bd.forEach(element => {
        template += comentario(`<h5 class="text-end">Autor: <span>${element.usuario} </span><span class="ms-4">${element.fecha} </span></h5>
        <p>${element.comentario}</p>`)
    })

    return template
}