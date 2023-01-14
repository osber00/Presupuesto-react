import { useState } from "react";
import FormNuevoPresupuesto from "./FormNuevoPresupuesto";
import InfoPresupuesto from "./InfoPresupuesto";

function WrapPresupuesto({
  presupuesto,
  setPresupuesto,
  presupuestoValido,
  setPresupuestoValido,
}) {

  return (
    <>
      {presupuestoValido ? (
        <InfoPresupuesto presupuesto={presupuesto}></InfoPresupuesto>
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
