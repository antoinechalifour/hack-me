import { Navigator } from "../store";

export class NavigatorInMemory implements Navigator {
  private path = "";

  currentUrl(): string {
    return this.path;
  }

  push(path: string): void {
    this.path = path;
  }
}
