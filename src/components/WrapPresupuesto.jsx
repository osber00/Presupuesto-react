import { useState } from "react";
import FormNuevoPresupuesto from "./FormNuevoPresupuesto";
import InfoPresupuesto from "./InfoPresupuesto";

function WrapPresupuesto({
  presupuesto,
  setPresupuesto,
  presupuestoValido,
  setPresupuestoValido,
  gastos,
  setResetarApp
}) {

  return (
    <>
      {presupuestoValido ? (
        <InfoPresupuesto presupuesto={presupuesto} gastos={gastos} setResetarApp={setResetarApp}></InfoPresupuesto>
      ) : (
        <FormNuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setPresupuestoValido={setPresupuestoValido}></FormNuevoPresupuesto>
      )}
    </>
  );
}

export default WrapPresupuesto;
