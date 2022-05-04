import { useState } from "react";
import { useEffect } from "react";

const Contador = () => {
  const [cuenta, setcuenta] = useState(100);
  const aumentar = () => {
    setcuenta(cuenta + 1);
  };

  const disminuir = () => {
    setcuenta(cuenta - 1);
  };

  const reset = () => {
    setcuenta(100);
  };

  useEffect(() => {
    console.log("El contador va en:", cuenta);
  }, [cuenta]);

  return (
    <div>
      <center>
        <h1>{cuenta}</h1>
        <buttom onClick={aumentar}>Aumentar</buttom>
        <button onClick={disminuir}>disminuir</button>
        <button onClick={reset}>Reset</button>
      </center>
    </div>
  );
};
export default Contador;
