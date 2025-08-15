import EjemploUseEffect from "./components/ejemploUseEffect/EjemploUseEffect";
import Reto from "./components/reto/Reto";
import Formulario from "./components/formulario/Formulario";
import UseStateEjemplo from "./components/useState/UseStateEjemplo";

function App() {
  return (
    <div className="w-screen h-max bg-black text-white text-2xl pt-6 flex items-center flex-col gap-8">
      <EjemploUseEffect />
      <Reto />
      <Formulario />
      <UseStateEjemplo />
    </div>
  );
}

export default App;
