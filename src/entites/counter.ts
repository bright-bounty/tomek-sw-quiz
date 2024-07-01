export class Counter {
  count_value: number = 120; // ustawienie wartości początkowej
  constructor() {
    console.log(`Counter game inicializated`);
  }

  renderCounter() {
    document.querySelector<HTMLDivElement>("#timer")!.innerHTML += `
<div class="flex flex-col items-center ">
  <div class=" flex items-center w-full">
    <img src="/lightsaber.svg" alt="lightsaber" class="w-72 h-12" />
    <div class="w-full w-max-full h-full relative -ml-5">
      <div
        class="time-bar relative w-full h-6 bg-white rounded-lg origin-left overflow-hidden z-10"
      
        style="--duration: ${this.count_value}"
      >

      </div>
      <div class="absolute w-full h-full top-0 left-0 bg-[#bcbcbc] overflow-hidden rounded-lg shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]"></div>
    </div>
  </div>
  <p class="font-extrabold text-4xl text-[rgba(255,0,0,0.8)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25),4px_4px_40px_rgba(255,0,0,0.9)] my-4" id="counter"></p>

</div>`;
    this.startCount(document.querySelector<HTMLElement>("#counter")!);
  }

  startCount(element: HTMLElement) {
    //wartości początkowe timera
    let sec = this.count_value % 60;
    let min = (this.count_value - sec) / 60;
    let current_value = this.count_value;
    element.innerText = `Time left: ${min}min ${sec}s`;

    //counter
    const counter = setInterval(() => {
      if (current_value === 1) {
        //koniec odliczania: reset timera, usunięcie miecza świetlnego,  zablokowanie ponownego włączenia podczas odliczania.
        // po skończeniu czasu wyświetlić modalWindow
        clearInterval(counter);
        document.querySelector<HTMLDivElement>("#timer")!.innerHTML = "";
        document.querySelector<HTMLButtonElement>(
          "#play",
        )!.style.pointerEvents = "auto";
      } else {
        current_value--;
        sec = current_value % 60;
        min = (current_value - sec) / 60;
        element.innerText = `Time left: ${min}min ${sec}s`;
      }
    }, 1000);
  }
}
