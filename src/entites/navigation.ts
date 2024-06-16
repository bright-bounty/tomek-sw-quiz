export type Modes = ["people", "vehicles", "starships"];

export class Navigation {
  selectors = {
    rootEl: "#app-navigation",
    item: "button",
  };
  rootEl: HTMLElement;
  public modes: Modes = ["people", "vehicles", "starships"];
  private mode: Modes[number];

  constructor(mode: Modes[number]) {
    this.mode = mode;
    this.rootEl = document.querySelector(this.selectors.rootEl)!;
    const items = this.rootEl.querySelectorAll<HTMLButtonElement>(
      this.selectors.item,
    );

    // this is the DOM init part
    // will be reserved for the renderer
    this.modes.forEach((mode, index) => {
      const [firstChar, ...other] = mode;
      const capitalize = firstChar.toUpperCase() + other.join("");

      const btn = items[index];
      btn.innerText = capitalize;
      // depending on data-active attr we underline mode in css or not
      btn.dataset.active = String(mode === this.mode);
    });
  }
}
