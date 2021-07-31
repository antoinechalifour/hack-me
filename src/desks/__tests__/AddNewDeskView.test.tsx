import React from "react";
import { MemoryRouter } from "react-router-dom";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AddNewDeskView } from "../components/AddNewDeskView";

const selectors = {};

const renderForTesting = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

describe("<AddNewDeskView />", () => {
  let form: AddNewDeskViewTest;

  beforeEach(() => {
    form = new AddNewDeskViewTest();
  });

  test("all fields are required", async () => {
    // Arrange
    form.render();

    // Act
    await form.whenSubmitted();

    // Assert
    form.expectInErrorState();
  });

  test("allows the user to provide the information required for adding a new desk", async () => {
    // Arrange
    form.render();

    // Act
    form.whenFilledCorrectly();
    await form.whenSubmitted();

    // Assert
    form.expectHasBeenSubmitted();
  });
});

class AddNewDeskViewTest {
  private addDesk;

  constructor() {
    this.addDesk = jest.fn();
  }

  render() {
    renderForTesting(<AddNewDeskView onNewDesk={this.addDesk} />);
    expect(this.deskNameErrorMessage).not.toBeInTheDocument();
    expect(this.numberOfEmployeesErrorMessage).not.toBeInTheDocument();
  }

  whenFilledCorrectly() {
    userEvent.type(this.deskNameInput, "Some awesome desk");
    userEvent.type(this.numberOfEmployeesInput, "50");
  }

  whenSubmitted() {
    return act(async () => {
      userEvent.click(this.submitButton);
    });
  }

  expectInErrorState() {
    expect(this.deskNameErrorMessage).toBeVisible();
    expect(this.numberOfEmployeesErrorMessage).toBeVisible();
  }

  expectHasBeenSubmitted() {
    expect(this.addDesk).toHaveBeenCalledTimes(1);
    expect(this.addDesk).toHaveBeenCalledWith("Some awesome desk", 50);
  }

  get deskNameInput() {
    return screen.getByLabelText("Desk name");
  }

  get deskNameErrorMessage() {
    return screen.queryByText("The desk name is required.");
  }

  get numberOfEmployeesInput() {
    return screen.getByLabelText("Number of employees");
  }

  get numberOfEmployeesErrorMessage() {
    return screen.queryByText("The number of employees is required.");
  }

  get submitButton() {
    return screen.getByRole("button", { name: "Add desk" });
  }
}
