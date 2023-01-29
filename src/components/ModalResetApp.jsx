function ModalResetApp({resetarApp, setResetarApp, resetApp}) {

    const cerrarModal = ()=>{
        setResetarApp('false')
    }

  return (
    <div
      className='fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5'
      x-show={resetarApp}
      role='dialog'>
      <div className='absolute inset-0 bg-slate-900/60 backdrop-blur transition-opacity duration-300'></div>
      <div className='relative flex w-full max-w-lg origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700'>
        <div className='flex justify-between rounded-t-lg  px-4 py-3 dark:bg-navy-800 sm:px-5'>
          <h3 className='text-base font-medium text-slate-700 dark:text-navy-100'>
            ¿Desea resetear la aplicación?, se perderán los datos
          </h3>
          <button
          onClick={()=>cerrarModal()}
            className='btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'>
            <i className='fa fa-times'></i>
          </button>
        </div>
        <form>
          <div className='flex flex-col overflow-y-auto px-4 py-4 sm:px-5'>
            <div className='mt-4 space-y-4'>

              <div className='space-x-2 text-right'>
                <button
                onClick={()=>cerrarModal()}
                  type="button"
                  className='btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90'>
                  No
                </button>
                <button onClick={()=>resetApp()} type="button" className='btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
                  Si
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalResetApp