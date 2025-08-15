import { useState, useRef } from "react";
function useForm() {
  const [usuario, setUsuario] = useState({
    primerNombre: "",
    apellido: "",
    email: "",
    confirmaEmail: "",
    password: "",
    confirmaPassword: "",
    genero: "",
    edad: "",
  });
  const errores = useRef({});

  const capturarDatos = (evento) => {
    const nombreUsuario = evento.target.name;
    const valorUsuario = evento.target.value;
    setUsuario({ ...usuario, [nombreUsuario]: valorUsuario });
  };

  const validarDatos = () => {
    if (usuario.primerNombre === "") {
      errores.current.mensaje = "El campo nombre es requerido";
      alert(errores.current.mensaje);
      return false;
    }
    errores.current.mensaje = "";
    return true;
  };

  const enviarDatos = (evento) => {
    evento.preventDefault();
    if (!validarDatos()) {
      return;
    }
    console.log("Paso por aca")
    alert("Se envio el formulario");
  };
  return {
    capturarDatos,
    usuario,
    enviarDatos,
  };
}

export default useForm;
