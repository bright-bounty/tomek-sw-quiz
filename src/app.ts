import { Navigation } from "./entites/navigation";
import { Onboarding } from "./entites/onboarding";

class App {
  private nav: Navigation;
  private onboarding;
  public mode: (typeof this.nav)["modes"][number] = "people";

  constructor() {
    this.nav = new Navigation(this.mode);
    this.onboarding = new Onboarding(this.mode);
  }
}
new App();
