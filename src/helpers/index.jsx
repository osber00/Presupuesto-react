export const formatearMoneda = (cifra)=>{
    return cifra.toLocaleString('es-ES',{
        style: 'currency',
        currency: 'COP'
    })
}