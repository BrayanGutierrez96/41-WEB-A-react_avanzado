## Reto 1 con UseEffect y useState

Crear un contador regresivo que empiece en 10 y baje 1 número por segundo hasta llegar a 0, usando useState y useEffect.

## Reto 2 🔖
Cambiar el fondo de la página automáticamente.

**Objetivo:** 🔍 Crear un componente que cambie el color de fondo de la pantalla cada 2 segundos de manera automática.

**Requisitos:** ✔️

- Usar useState para guardar el color actual.

- Usar useEffect para iniciar un setInterval que cambie el color cada 2 segundos.

- Limpiar el intervalo en el return del useEffect.

- Los colores deben elegirse de un arreglo de colores definido por ustedes (ejemplo: ["red", "blue", "green", "yellow"]).

**Resultado esperado:** 

- Al montar el componente, el color de fondo cambia cada 2 segundos.

- El ciclo se repite indefinidamente.

**Pista:** 

Usen el mismo truco del índice cíclico con % que expliqué antes para recorrer el arreglo de colores.

