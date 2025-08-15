import axios from "axios";
import { useEffect, useState } from "react";

// function Dogs() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCharacters = async () => {
//       try {
//         const response = await axios.get(
//           "https://rickandmortyapi.com/api/character"
//         );
//         setData(response.data.results);
//       } catch (err) {
//         setError("Error al cargar los personajes");
//       } finally {
//       }
//     };

//     fetchCharacters();
//   }, []);

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-8">
//       {data.map((character) => (
//         <div
//           key={character.id}
//           className="flex flex-col border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow"
//         >
//           <div className="rounded-t-md overflow-hidden">
//             <img
//               src={character.image}
//               alt={character.name}
//               className="w-full h-48 object-cover"
//             />
//           </div>
//           <div className="text-center flex flex-col gap-2 py-4 px-2">
//             <h3 className="font-semibold text-lg">{character.name}</h3>
//             <p className="text-gray-600">{character.gender}</p>
//             <p className="text-gray-600">{character.species}</p>
//             <p className="text-sm text-gray-500">{character.status}</p>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

// export default Dogs;

import { useForm } from "react-hook-form";

function Dogs() {
  const { register, handleSubmit } = useForm();

  const onsubmit = handleSubmit(async(data)=>{
    try {
        const respuesta = await axios.post('https://sample-dogs-api.netlify.app/api/v1/dogs', data)
        console.log(respuesta)
    } catch (error) {
        
    }
  })

  return (
    <div className="p-4">
      <form action="" className="flex gap-2 flex-col" onSubmit={onsubmit}>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          placeholder="nombre"
          className="border-1 w-40"
          {...register("name", { required: true })}
        />
        <label htmlFor="">Raza</label>
        <input
          type="text"
          placeholder="raza"
          className="border-1 w-40"
          {...register("breed", { required: true })}
        />
        <label htmlFor="">Imagen</label>
        <input
          type="text"
          placeholder="image"
          className="border-1 w-40"
          {...register("image", { required: true })}
        />
        <input type="submit" value="enviar" className="border-1 w-15 p-2 rounded-md bg-blue-200" />
      </form>
    </div>
  );
}

export default Dogs;
