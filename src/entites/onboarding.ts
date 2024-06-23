import { Modes } from "./navigation";

export class Onboarding {
  selectors = {
    rootEl: "#mode-label",
  };
  rootEl: HTMLElement;
  private _mode!: Modes[number];
  // TODO: labels should be moved to rendered once it's created'
  modeLabels: Record<Modes[number], string> = {
    people: "Who is this character?",
    vehicles: "What kind of Vehicles is this?",
    starships: "What kind of Starship is this?",
  };
  constructor(mode: Modes[number]) {
    this.rootEl = document.querySelector(this.selectors.rootEl)!;
    this.mode = mode;

    console.log("Onboarding has been initialized");
  }

  get mode() {
    return this._mode;
  }
  set mode(value: Modes[number]) {
    this._mode = value;
    this.onModeChange();
  }
  public onModeChange() {
    console.log("onModeChange triggered");
    this.rootEl.innerText = this.modeLabels[this._mode];
  }
}
