import { History } from "history";

import { Dependencies } from "./store";
import { DesksInMemory } from "./infrastructure/DesksInMemory";
import { HistoryNavigator } from "./infrastructure/HistoryNavigator";

export const makeAppDependencies = (history: History): Dependencies => ({
  navigator: new HistoryNavigator(history),
  desks: new DesksInMemory(),
});
