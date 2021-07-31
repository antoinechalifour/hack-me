import { makeTestDependencies } from "../tests/testsDependencies";
import { createStore, Dependencies, Store } from "../store";
import { addNewDesk, allDesks } from "./desksSlice";

describe("Adding a new desk", () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = makeTestDependencies();
    store = createStore(dependencies);
  });

  it("should create a new desk and redirect to the desks list", async () => {
    // Arrange
    const action = addNewDesk("Desk 1", 10);

    // Act
    await store.dispatch(action);

    // Assert
    expect(allDesks(store.getState())).toEqual([
      {
        id: expect.any(String),
        name: "Desk 1",
        numberOfEmployees: 10,
      },
    ]);
    expect(allDesks(store.getState())).toBe(allDesks(store.getState()));

    expect(dependencies.navigator.currentUrl()).toEqual("/desks");
  });
});
