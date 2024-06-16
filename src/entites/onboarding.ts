import { Modes } from "./navigation";

export class Onboarding {
  private _mode!: Modes[number];
  // TODO: labels should be moved to rendered once it's created'
  modeLabels: Record<Modes[number], string> = {
    people: "Who is this character?",
    vehicles: "What kind of Vehicles is this?",
    starships: "What kind of Starship is this?",
  };

  constructor(mode: Modes[number]) {
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
  }
}
