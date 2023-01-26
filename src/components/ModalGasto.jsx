import { useEffect,useState } from "react";
import Alerta from "./Alerta";

function ModalGasto({ modal, setModal, registrarGastos, setGastoEdicion, gastoEdicion }) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(()=>{
    if(Object.keys(gastoEdicion).length > 0 ){
      setNombre(gastoEdicion.nombre)
      setCantidad(gastoEdicion.cantidad)
      setCategoria(gastoEdicion.categoria)
    }
  },[gastoEdicion])

  const handleFormulario = (e) => {
    e.preventDefault()
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los datos son requeridos");
      return
    }
    const datos = { nombre, cantidad, categoria }
    registrarGastos(datos);
    cerrarModal()
  };

  const cerrarModal = () => {
    setNombre("")
    setCantidad("")
    setCategoria("")
    setMensaje("")
    setModal("false")
    setGastoEdicion({})
  };

  return (
    <div
      className='fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5'
      x-show={modal}
      role='dialog'>
      <div className='absolute inset-0 bg-slate-900/60 backdrop-blur transition-opacity duration-300'></div>
      <div className='relative flex w-full max-w-lg origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700'>
        <div className='flex justify-between rounded-t-lg  px-4 py-3 dark:bg-navy-800 sm:px-5'>
          <h3 className='text-base font-medium text-slate-700 dark:text-navy-100'>
            Nuevo Gasto
          </h3>
          <button
            onClick={cerrarModal}
            className='btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'>
            <i className='fa fa-times'></i>
          </button>
        </div>
        <form onSubmit={handleFormulario}>
          {mensaje && <Alerta tipo='error'>{mensaje}</Alerta>}

          <div className='flex flex-col overflow-y-auto px-4 py-4 sm:px-5'>
            <div className='mt-4 space-y-4'>
              <label className='block'>
                <span>Nombre de gasto:</span>
                <input
                  className='form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
                  placeholder='Nombre de gasto'
                  type='text'
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </label>
              <label className='block'>
                <span>Cantidad:</span>
                <input
                  className='form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
                  placeholder='Cantidad de gasto'
                  type='number'
                  value={cantidad}
                  onChange={(e) => (setCantidad(e.target.value))}
                />
              </label>
              <label className='block'>
                <span>Categoría :</span>
                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className='form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent'>
                  <option value=''>Seleccione categoría</option>
                  <option value='ahorro'>Ahorro</option>
                  <option value='comida'>Comida</option>
                  <option value='varios'>Gastos varios</option>
                  <option value='ocio'>Ocio</option>
                  <option value='salud'>Salud</option>
                  <option value='suscripciones'>Suscripciones</option>
                </select>
              </label>
              {/* <label className='block'>
                <span>Description:</span>
                <textarea
                  rows='4'
                  placeholder=' Enter Text'
                  className='form-textarea mt-1.5 w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'></textarea>
              </label> */}

              {/* <label className='inline-flex items-center space-x-2'>
                    <input
                        className='form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-accent dark:checked:before:bg-accent'
                        type='checkbox'
                    />
                    <span>Public pin</span>
                    </label> */}
              <div className='space-x-2 text-right'>
                <button
                  onClick={cerrarModal}
                  className='btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90'>
                  Cancelar
                </button>
                <button className='btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalGasto;
