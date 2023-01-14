
function Gastos() {
  return (
    <div className='mt-4 sm:mt-5 lg:mt-6'>
                <div className='flex h-8 items-center justify-center'>
                  <h2 className='text-base font-medium tracking-wide text-slate-700 dark:text-navy-100'>
                    Week 2 Classes
                  </h2>
                </div>
                <div className='mt-3 grid grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-5'>
                  <div className='card flex-row overflow-hidden'>
                    <div className='h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600'></div>
                    <div className='flex flex-1 flex-col justify-between p-4 sm:px-5'>
                      <div>
                        <img
                          className='h-12 w-12 rounded-lg object-cover object-center'
                          src='images/800x600.png'
                          alt='image'
                        />
                        <h3 className='mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100'>
                          Lenguaje temporal de ayuda
                        </h3>
                        <p className='text-xs+'>Mon. 08:00 - 09:00</p>
                        <div className='mt-2 flex space-x-1.5'>
                          <a
                            href='#'
                            className='tag bg-primary py-1 px-1.5 text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
                            Language
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card flex-row overflow-hidden'>
                    <div className='h-full w-1 bg-gradient-to-b from-info to-info-focus'></div>
                    <div className='flex flex-1 flex-col justify-between p-4 sm:px-5'>
                      <div>
                        <img
                          className='h-12 w-12 rounded-lg object-cover object-center'
                          src='images/800x600.png'
                          alt='image'
                        />
                        <h3 className='mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100'>
                          Learn UI/UX Design
                        </h3>
                        <p className='text-xs+'>Tue. 10:00 - 11:30</p>
                        <div className='mt-2 flex space-x-1.5'>
                          <a
                            href='#'
                            className='tag bg-info py-1 px-1.5 text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90'>
                            UI/UX Design
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card flex-row overflow-hidden'>
                    <div className='h-full w-1 bg-gradient-to-b from-secondary-light to-secondary'></div>
                    <div className='flex flex-1 flex-col justify-between p-4 sm:px-5'>
                      <div>
                        <img
                          className='h-12 w-12 rounded-lg object-cover object-center'
                          src='images/800x600.png'
                          alt='image'
                        />
                        <h3 className='mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100'>
                          Basic of digital marketing
                        </h3>
                        <p className='text-xs+'>Wed. 09:00 - 11:00</p>
                        <div className='mt-2 flex space-x-1.5'>
                          <a
                            href='#'
                            className='tag bg-secondary px-1.5 py-1 text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90'>
                            Marketing
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default Gastos