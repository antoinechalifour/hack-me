import { createStore, Dependencies, Store } from "../../store";
import { makeTestDependencies } from "../../tests/testsDependencies";
import { deskById, requestDesk } from "../desksSlice";

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
