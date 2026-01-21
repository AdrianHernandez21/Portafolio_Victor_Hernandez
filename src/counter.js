export function setupCounter(element) {
  // Inicializa el estado interno del contador.
  let counter = 0;

  // Actualiza el valor y refleja el cambio en el DOM.
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  // Incrementa el contador al hacer click en el elemento.
  element.addEventListener("click", () => setCounter(counter + 1));

  // Render inicial del contador.
  setCounter(0);
}
