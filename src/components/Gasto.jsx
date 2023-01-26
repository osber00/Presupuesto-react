import { formatearFecha, formatearMoneda } from "../helpers";

function Gasto({ gasto, setGastoEdicion }) {
  const { nombre, cantidad, categoria, fecha } = gasto;

  const diccionarioIconos = {
    ahorro: "coins",
    comida: "utensils",
    varios: "home",
    ocio: "mug-hot",
    salud: "user-doctor",
    suscripciones: "film",
  };

  return (
    <>
      <div className='h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600'></div>
      <div className='flex flex-1 flex-col justify-between p-4 sm:px-5'>
        <div>
          <i
            className={`fa fa-${diccionarioIconos[categoria]} fa-3x text-primary`}></i>
          <h3 className='mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100'>
            {nombre}
          </h3>
          <p className='text-xs+'>{formatearMoneda(Number(cantidad))}</p>
          <div className='mt-2 flex space-x-1.5'>
            <a
              href='#'
              className='tag bg-primary py-1 px-1.5 uppercase text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
              {categoria}
            </a>
          </div>
          <p className='text-xs+ mt-4'>Registro: {formatearFecha(fecha)}</p>
          <div className=''>
            <button onClick={()=>setGastoEdicion(gasto)} className='btn mr-2 bg-primary/10 mt-2 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25'>
              Editar
            </button>
            <button className='btn bg-error/10 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25'>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gasto;
