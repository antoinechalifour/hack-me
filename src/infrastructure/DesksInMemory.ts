import { Desk } from "../desks/Desk";
import { v4 as uuid } from "uuid";
import { DesksRepository } from "../store";

const makeDesk = (name: string, numberOfEmployees: number): Desk => ({
  id: uuid(),
  name,
  numberOfEmployees,
});

export class DesksInMemory implements DesksRepository {
  save(name: string, numberOfEmployees: number): Promise<Desk> {
    const desk = makeDesk(name, numberOfEmployees);

    return Promise.resolve(desk);
  }
}
