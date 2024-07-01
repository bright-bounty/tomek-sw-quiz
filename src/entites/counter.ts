export class Counter {
  count_value: number = 120;
  constructor() {
    this.count_value = this.count_value;
    console.log(`Counter game inicializated`);
  }

  renderCounter() {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML += `
<div class="flex flex-col items-center " id="timer">
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
    let sec = this.count_value % 60;
    let min = (this.count_value - sec) / 60;
    element.innerText = `Time left: ${min}min ${sec}s`;
    const counter = setInterval(() => {
      this.count_value === 0 ? clearInterval(counter) : this.count_value--;
      sec = this.count_value % 60;
      min = (this.count_value - sec) / 60;
      element.innerText = `Time left: ${min}min ${sec}s`;
    }, 1000);
  }
}
