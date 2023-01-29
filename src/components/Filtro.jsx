import { useState, useEffect } from "react";

function Filtro({filtro, setFiltro}) {
  return (
    <div className='justify-center'>
      <div className='grid grid-col-6'>
        <label className='block'>
          <span>Categoría :</span>
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className='form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent'>
            <option value=''>Todas las categorías</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='varios'>Gastos varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Filtro;
