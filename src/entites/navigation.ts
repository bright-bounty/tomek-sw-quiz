export type Modes = ["people", "vehicles", "starships"];

export class Navigation {
  selectors = {
    rootEl: "#app-navigation",
    item: "button",
  };
  rootEl: HTMLElement;

  public modes: Modes = ["people", "vehicles", "starships"];
  private _mode!: Modes[number];
  items: NodeListOf<HTMLButtonElement>;

  constructor(mode: Modes[number]) {
    this.mode = mode;
    this.rootEl = document.querySelector(this.selectors.rootEl)!;
    this.items = this.rootEl.querySelectorAll<HTMLButtonElement>(
      this.selectors.item,
    )!;

    console.log("Navigation has been initialized");
    this.chooseMode();
  }

  get mode() {
    return this._mode;
  }
  set mode(value: Modes[number]) {
    this._mode = value;
    if (this.items !== undefined) {
      this.chooseMode();
    }
  }

  chooseMode() {
    console.log("chooseMode triggered");
    // this is the DOM init part
    // will be reserved for the renderer
    this.modes.forEach((mode, index) => {
      const [firstChar, ...other] = mode;
      const capitalize = firstChar.toUpperCase() + other.join("");
      const btn = this.items[index];

      btn.innerText = capitalize;
      // depending on data-active attr we underline mode in css or not
      btn.dataset.active = String(mode === this.mode);
    });
  }
}
