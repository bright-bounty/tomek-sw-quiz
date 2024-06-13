export class Navigation {
  buttons = document.querySelectorAll(".nav-button");

  btn: HTMLButtonElement;

  constructor(btn: HTMLButtonElement) {
    this.btn = btn;
  }
  chooseMode() {
    this.buttons.forEach((btn) => {
      btn.classList.remove("mode-selected");
    });
    this.btn.classList.add("mode-selected");
  }
}
