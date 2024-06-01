export const comentario = (nombre, fecha, comentario)=> {
    const template=`
    <div class="mt-4">
        <div class="card p-3">
            ${nombre}
        </div>
    </div>
    `
    return template;
}