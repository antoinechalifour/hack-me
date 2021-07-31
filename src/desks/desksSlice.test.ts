import { makeTestDependencies } from "../tests/testsDependencies";
import { createStore, Dependencies, Store } from "../store";
import { addNewDesk, allDesks, deskById, requestDesk } from "./desksSlice";

describe("Adding a new desk", () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = makeTestDependencies();
    store = createStore(dependencies);
  });

  test("should create a new desk and redirect to the desks list", async () => {
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

describe("Requesting a desk", () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = makeTestDependencies();
    store = createStore(dependencies);
  });

  test("Fetches the desk information", async () => {
    // Arrange
    const desk = await dependencies.desks.save("Some desk", 12);

    // Act
    await store.dispatch(requestDesk(desk.id));

    // Assert
    expect(deskById(store.getState(), desk.id)).toEqual(desk);
    expect(dependencies.navigator.currentUrl()).toEqual("");
  });

  test("Redirects to the desks list when the desk is not found", async () => {
    // Arrange
    const unknownDeskId = "unknown-id";

    // Act
    await store.dispatch(requestDesk(unknownDeskId));

    // Assert
    expect(deskById(store.getState(), unknownDeskId)).toBeUndefined();
    expect(dependencies.navigator.currentUrl()).toEqual("/desks");
  });
});
