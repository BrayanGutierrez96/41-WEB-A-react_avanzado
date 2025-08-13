import { useEffect, useState } from "react";

function EjemploUseEffect() {
  const [mensaje, setMensaje] = useState("Estoy aprendiendo React 🎊");
  const mensajes = [
    "Estoy aprendiendo React 🎊",
    "Estamos repasando useEffect 📑",
    "Esta es la primera clase del modulo react avanzado 🎓",
  ];

  useEffect(() => {
    let indice = 0;
    const intervalo = setInterval(() => {
        indice = (indice + 1) % mensajes.length; 
        setMensaje(mensajes[indice]);
    }, 6000);
    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-center text-4xl">Ejemplo useEffect</h1>
      <p className="text-center">{mensaje}</p>
    </div>
  );
}

export default EjemploUseEffect;

