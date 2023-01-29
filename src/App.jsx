import { useEffect, useState } from "react";

import Gastos from "./components/Gastos";
import WrapPresupuesto from "./components/WrapPresupuesto";
import WrapPagina from "./components/WrapPagina";
import ModalGasto from "./components/ModalGasto";
import { generarId } from "./helpers";
import Filtro from "./components/Filtro";
import ModalResetApp from "./components/ModalResetApp";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );
  const [modal, setModal] = useState("false");
  const [gastoEdicion, setGastoEdicion] = useState({})
  const [filtro, setFiltro] = useState(
    localStorage.getItem("filtro") ? localStorage.getItem("filtro") : ""
  );
  const [gastosCategoria, setGastosCategoria] = useState([])
  const [resetarApp, setResetarApp] = useState("false")

  useEffect(() => {
    if (Object.keys(gastoEdicion).length > 0) {
      //console.log('Gasto edición tiene elemento')
      setModal("true");
    }
  }, [gastoEdicion]);

  //Registrar Presupuesto en LocalStorage
  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  //Registrar Gastos en LocalStorage
  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [gastos]);

  //Recuperar Presupuesto de LocalStorage
  useEffect(() => {
    const presupuestoLS = localStorage.getItem("presupuesto") ?? 0;
    if (presupuestoLS > 0) {
      setPresupuestoValido(true);
    }
  }, []);

  //Registrar filtro al LocalStorage
  useEffect(() => {
    localStorage.setItem("filtro", filtro ?? "");
  }, [filtro]);

  //Filtrar gastos por categoría y agregarlos al State
  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter((gasto) => {
        return gasto.categoria == filtro;
      });
      setGastosCategoria(gastosFiltrados);
    }
  }, [filtro, gastos]);

  const registrarGastos = (data) => {
    /* console.log(data)
    return */
    if (data.id != "") {
      //Editar
      const gastosActualizados = gastos.map((gastoTemp) => {
        return gastoTemp.id == data.id ? data : gastoTemp;
      });

      setTimeout(() => {
        setGastos(gastosActualizados);
      }, 500);
    } else {
      //Registrar
      data.id = gastos.length + 1;
      data.fecha = Date.now();
      setTimeout(() => {
        setGastos([...gastos, data]);
      }, 500);
    }
  };

  const eliminarGasto = (id) => {
    //console.log('Eliminar reg. ', id)
    const gastosActualizados = gastos.filter((gasto) => {
      return gasto.id != id;
    });

    setTimeout(() => {
      setGastos(gastosActualizados);
    }, 500);
  };

  const resetApp = () =>{
    setPresupuesto(0)
    setGastos([])
    setFiltro('')
    setPresupuestoValido(false)
    setGastosCategoria([])
  }

  return (
    <WrapPagina>
      <WrapPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
        gastos={gastos}
        setResetarApp={setResetarApp}
        ></WrapPresupuesto>

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
            registrarGastos={registrarGastos}
            setGastoEdicion={setGastoEdicion}
            gastoEdicion={gastoEdicion}></ModalGasto>

          <ModalResetApp
            resetarApp={resetarApp}
            setResetarApp={setResetarApp}
            resetApp={resetApp}
          ></ModalResetApp>

          <Filtro filtro={filtro} setFiltro={setFiltro}></Filtro>

          <Gastos
            filtro={filtro}
            gastosCategoria={gastosCategoria}
            gastos={gastos}
            setGastoEdicion={setGastoEdicion}
            eliminarGasto={eliminarGasto}></Gastos>
        </>
      )}
    </WrapPagina>
  );
}

export default App;
