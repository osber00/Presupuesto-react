function WrapPagina({children}) {
  return (
    <>
      <div className='app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900'>
        <div className='app-preloader-inner relative inline-block h-48 w-48'></div>
      </div>
      <div
        id='root'
        className='min-h-100vh flex grow bg-slate-50 dark:bg-navy-900'>
        <main className='main-content w-full px-[var(--margin-x)] pb-8'>
          <div className='mt-4 grid grid-cols-12 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6'>
            <div className='col-span-12 lg:col-span-12 xl:col-span-8'>

              {children}

            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default WrapPagina