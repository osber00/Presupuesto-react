
import { useEffect, useState } from 'react';
import {formatearMoneda} from '../helpers'

function InfoPresupuesto({presupuesto,gastos}) {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(()=>{
    const totalGastos = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)
    const totalDisponible = presupuesto - totalGastos
    /* console.log(typeof totalGastos);
    console.log( typeof totalDisponible); */
    setGastado(totalGastos)
    setDisponible(totalDisponible)
  },[gastos])

  return (
    <div className='card bg-gradient-to-br from-purple-500 to-indigo-600 px-4 pb-4 sm:px-5'>
      <div className='flex items-center justify-between py-3 text-white'>
        <h2 className='text-sm+ font-medium tracking-wide'>Tu balance</h2>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6'>
        <div>
          <div className='mt-3 text-3xl font-semibold text-white'>
            {formatearMoneda(presupuesto)}
          </div>
          <p className='mt-3 text-xs+ text-indigo-100'>COP (Pesos colombianos)</p>
        </div>

        <div className='grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6'>
          <div>
            <p className='text-indigo-100'>Disponible</p>
            <div className='mt-1 flex items-center space-x-2'>
              <div className='flex h-7 w-7 items-center justify-center rounded-full bg-black/20 text-white'>
                <i className="fa fa-angle-right"></i>
              </div>
              <p className='text-base font-medium text-white'>{formatearMoneda(disponible)}</p>
            </div>
          </div>
          <div>
            <p className='text-indigo-100'>Gastado</p>
            <div className='mt-1 flex items-center space-x-2'>
              <div className='flex h-7 w-7 items-center justify-center rounded-full bg-black/20 text-white'>
              <i className="fa fa-angle-down"></i>
              </div>
              <p className='text-base font-medium text-white'>{formatearMoneda(gastado)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPresupuesto;
