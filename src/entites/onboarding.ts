export class Onboarding {
  mode = document.querySelector(".mode");
  modeChose: { people: string; vehicles: string; starships: string } = {
    people: "Who is this character?",
    vehicles: "What kind of Vehicles is this?",
    starships: "What kind of Starship is this?",
  };

  modeText: string;

  constructor(modeText: string) {
    this.modeText = modeText;
  }

  changeMode() {
    // console.log(this.modeChose[`${this.modeText}`]);
  }
}
