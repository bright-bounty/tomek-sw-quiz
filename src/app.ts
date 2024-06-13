import { Navigation } from "./entites/navigation";
import { Onboarding } from "./entites/onboarding";

const navButtons: HTMLButtonElement[] = Array.from(
  document.querySelectorAll<HTMLButtonElement>(".nav-button"),
);

class App {
  btn: HTMLButtonElement;
  constructor(btn: HTMLButtonElement) {
    this.btn = btn;
  }

  navigation() {
    const nav = new Navigation(this.btn);
    nav.chooseMode();
  }
  onboarding() {
    const onboarding = new Onboarding(this.btn.innerText);
    onboarding.changeMode();
  }
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const app = new App(btn);
    app.navigation();
    app.onboarding();
  });
});
