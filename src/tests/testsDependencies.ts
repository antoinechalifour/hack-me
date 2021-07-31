import { Dependencies } from "../store";
import { DesksInMemory } from "../infrastructure/DesksInMemory";
import { NavigatorInMemory } from "../infrastructure/NavigatorInMemory";

export const makeTestDependencies = (): Dependencies => ({
  desks: new DesksInMemory(),
  navigator: new NavigatorInMemory(),
});
