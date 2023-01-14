function Alerta({ children, tipo }) {
  return (
    <div className={`alert flex rounded-lg  justify-center border border-${tipo} mt-4 px-4 py-2 text-${tipo} sm:px-5`}>
      {children}
    </div>
  );
}

export default Alerta;
