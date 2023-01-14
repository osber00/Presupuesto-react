import {useState} from 'react'

import Alerta from './Alerta'

function FormNuevoPresupuesto({ presupuesto, setPresupuesto, setPresupuestoValido }) {

  const [mensaje, setMensaje] = useState('')

  const handleFormulario = (e)=>{
      e.preventDefault()
      if(presupuesto == null || presupuesto <= 0){
        setMensaje('El presupuesto no es válido, debe ser mayor que cero')
        return
      }

      setMensaje('')
      setPresupuestoValido(true)
  }

  return (
    <form onSubmit={handleFormulario}>
      <div className='relative flex flex-col items-center justify-center'>
        <div className='absolute right-0 top-0 -mt-8 hidden max-w-xs p-4 lg:block'></div>
        <h2 className='mt-8 text-xl font-medium text-slate-600 dark:text-navy-100 lg:text-2xl'>
          Nuevo Presupuesto
        </h2>
        <div className='relative mt-6 w-full max-w-md'>
          <input
            className='form-input peer h-12 w-full rounded border border-slate-300 bg-slate-50 px-4 py-2 pl-9 text-base placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-900 dark:hover:border-navy-400 dark:focus:border-accent'
            placeholder='Escriba una cifra'
            type='number'
            value={presupuesto}
            onChange={(e)=>setPresupuesto(Number(e.target.value))}
          />
          <div className='absolute left-0 top-0 flex h-12 w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
            <i className='fa fa-search'></i>
          </div>
        </div>
        <div className='mt-4'>
          <button className='btn bg-primary py-3 px-8 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
            <i className='fa fa-save mr-1'></i> Registrar
          </button>
        </div>
        {mensaje && <Alerta tipo='error'>{mensaje}</Alerta>}
      </div>
    </form>
  );
}

export default FormNuevoPresupuesto;
