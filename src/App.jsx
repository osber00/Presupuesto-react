import { useEffect, useState } from "react";

import Gastos from "./components/Gastos";
import WrapPresupuesto from "./components/WrapPresupuesto";
import WrapPagina from "./components/WrapPagina";
import ModalGasto from "./components/ModalGasto";
import { generarId } from "./helpers";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState("false");


  const registrarGastos = (data) => {
    data.id = gastos.length + 1;
    data.fecha = Date.now();
    setTimeout(()=>{
      setGastos([...gastos, data]);
    },1000)
  };

  return (
    <WrapPagina>
      <WrapPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
        gastos={gastos}></WrapPresupuesto>

      {presupuestoValido && (
        <>
          <div className='w-full text-right mt-6'>
            <button
              onClick={() => setModal("true")}
              className='btn h-9 w-9 rounded-full bg-primary p-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90'>
              <i className='fa fa-plus'></i>
            </button>
          </div>

          <ModalGasto
            modal={modal}
            setModal={setModal}
            registrarGastos={registrarGastos}></ModalGasto>

          <Gastos gastos={gastos}></Gastos>
        </>
      )}
    </WrapPagina>
  );
}

export default App;
