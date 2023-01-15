export const formatearMoneda = (cifra) => {
    return cifra.toLocaleString('es-ES',{
        style: 'currency',
        currency: 'COP'
    })
}

export const formatearFecha = (data) => {
    const opciones = {
        year : 'numeric',
        month: 'long',
        day: '2-digit'
    }

    const fecha = new Date(data)

    return fecha.toLocaleDateString('es-ES', opciones)

}


export const generarId = () =>{
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
}
