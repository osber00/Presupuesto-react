import { useState } from "react";

import Gastos from "./components/Gastos";
import WrapPresupuesto from "./components/WrapPresupuesto";
import WrapPagina from "./components/WrapPagina";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  return (
    <WrapPagina>
      <WrapPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}></WrapPresupuesto>

      <div className="w-full text-right mt-6">
        <button class='btn h-9 w-9 rounded-full bg-primary p-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90'>
          <i className='fa fa-plus'></i>
        </button>
      </div>

      <Gastos></Gastos>
    </WrapPagina>
  );
}

export default App;
