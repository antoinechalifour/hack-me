import { History } from "history";

import { Navigator } from "../store";

export class HistoryNavigator implements Navigator {
  constructor(private history: History) {}

  currentUrl(): string {
    return this.history.location.pathname;
  }

  push(path: string): void {
    this.history.push(path);
  }
}
