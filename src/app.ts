import { Navigation } from "./entites/navigation";
import { Onboarding } from "./entites/onboarding";
import { Counter } from "./entites/counter.ts";

class App {
  private nav: Navigation;
  private onboarding;
  private counter;
  public mode: (typeof this.nav)["modes"][number] = "people";

  constructor() {
    this.nav = new Navigation(this.mode);
    this.onboarding = new Onboarding(this.mode);
    this.counter = new Counter();
  }

  startTimer() {
    this.counter.renderCounter();
  }
}
const app = new App();

document
  .querySelector<HTMLButtonElement>("#play")
  ?.addEventListener("click", () => {
    app.startTimer();

    document.querySelector<HTMLButtonElement>("#play")!.style.pointerEvents =
      "none";
  });
