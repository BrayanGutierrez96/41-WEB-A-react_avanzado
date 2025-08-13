import { useEffect, useState } from "react";

function Reto() {
  const [contador, setContador] = useState(10);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (contador === 0) {
        setContador(10);
      }
      if (contador > 0) {
        setContador(contador - 1);
      }
    }, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, [contador]);

  return (
    <div className="flex flex-col gap-6 justify-center items-center text-white">
      <h2 className="text-sky-300">Reto de contador regresivo</h2>
      <div className="text-red-300 font-bold text-2xl">{contador}</div>
    </div>
  );
}

export default Reto;
