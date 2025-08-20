import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(40);
  const [hasMore, setHasMore] = useState(true);

  const traerPersonajes = async () => {
    try {
      const url = `https://rickandmortyapi.com/api/character?page=${pagina}`;
      const respuestaJson = await fetch(url);
      if (!respuestaJson) return null;
      const respuesta = await respuestaJson.json();
      if (!respuesta) return null;
      const hayMasPersonajes = Boolean(respuesta.info?.next);

      setPersonajes((prev) => [...prev, ...respuesta.results]);
      setPagina((prev) => prev + 1);
      setHasMore(hayMasPersonajes);
    } catch (error) {
      console.log(error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    traerPersonajes();
  }, []);

  return (
    // Creamos un componente de contenedor de la biblioteca InfiniteScroll
    <InfiniteScroll
      dataLength={personajes.length}
      next={traerPersonajes}
      hasMore={hasMore}
      loader={<h4>Cargando...</h4>}
      endMessage={
        <p className="text-center text-red-500 mb-10">
          <b>-------------- Este es el fin -------------</b>
        </p>
      }
    >
      {/* Creamos un componente de cajas de personajes */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-10">
        {/* Recorremos cada personaje y creamos un componente de la caja de personajes */}
        {personajes.map((personaje, index) => {
          return (
            <div
              className="border border-slate-400 pb-10 rounded-md shadow-xl"
              key={index}
            >
              <div className="w-full bg-blue-500">
                <img src={personaje.image} alt="" className="w-full" />
              </div>
              <div className="flex flex-col p-10 gap-5 ">
                <h2>
                  Nombre:{" "}
                  <span className="font-extrabold">{personaje.name}</span>
                </h2>
                <p>
                  Especie:
                  <span className="font-extrabold"> {personaje.species}</span>
                </p>
                <p>Esta vivo: {personaje.status === "Alive" ? "😀" : "😔"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}

export default App;
