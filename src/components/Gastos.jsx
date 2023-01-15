import Gasto from "./Gasto";

function Gastos({ gastos }) {
  return (
    <div className='mt-4 sm:mt-5 lg:mt-6'>
      <div className='flex h-8 items-center justify-center'>
        <h2 className='text-base font-medium tracking-wide text-slate-700 dark:text-navy-100'>
          {gastos.length > 0
            ? "Registros de gastos"
            : "No hay gastos registrados"}
        </h2>
      </div>
      <div className='mt-3 grid grid-cols-3 gap-4 sm:grid-cols-1 sm:gap-5'>
        {gastos.map((gasto) => (
          <div className='card flex-row overflow-hidden' key={gasto.id}>
            <Gasto gasto={gasto}></Gasto>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gastos;
