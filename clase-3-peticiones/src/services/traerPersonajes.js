export const traerPersonajes = async (url) => {
  try {
    const respuestaJson = await fetch(url)
    if (!respuestaJson) return null
    const respuesta = await respuestaJson.json()
    if (!respuesta) return null
    return respuesta.results
  } catch (error) {
    console.log(error)
  }
}
