import { Desk } from "../desks/Desk";
import { v4 as uuid } from "uuid";
import { DesksRepository } from "../store";

const makeDesk = (name: string, numberOfEmployees: number): Desk => ({
  id: uuid(),
  name,
  numberOfEmployees,
});

export class DesksInMemory implements DesksRepository {
  private database = new Map<string, Desk>();

  save(name: string, numberOfEmployees: number): Promise<Desk> {
    const desk = makeDesk(name, numberOfEmployees);
    this.persist(desk);

    return Promise.resolve(desk);
  }

  update(desk: Desk): Promise<Desk> {
    this.persist(desk);
    return Promise.resolve(desk);
  }

  ofId(deskId: string): Promise<Desk> {
    const desk = this.database.get(deskId);

    if (!desk) throw new Error("Desk not found");

    return Promise.resolve(desk);
  }

  private persist(desk: Desk) {
    this.database.set(desk.id, desk);
  }
}
