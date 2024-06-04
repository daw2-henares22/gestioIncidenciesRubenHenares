export const comentario = (autor, fecha, comentario)=> {
    const template=`
    <div class="card p-3">
        <h5 class="text-end">Autor: <span>${autor}</span><span id="fecha" class="ms-4">${fecha}</span></h5>
        <p>${comentario}</p>
    </div>  
    `
    return template;
}