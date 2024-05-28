export function setupCounter(element: HTMLButtonElement) {
  let counter_value = 0;
  const setCounter = (count: number) => {
    counter_value = count;
    element.innerHTML = `count is ${counter_value}`;
  };
  element.addEventListener("click", () => setCounter(counter_value + 1));
  setCounter(0);
}
