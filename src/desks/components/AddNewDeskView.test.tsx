import React from "react";
import { MemoryRouter } from "react-router-dom";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AddNewDeskView } from "./AddNewDeskView";

const selectors = {
  deskNameInput: () => screen.getByLabelText("Desk name"),
  numberOfEmployeesInput: () => screen.getByLabelText("Number of employees"),
  deskNameErrorMessage: () => screen.queryByText("The desk name is required."),
  numberOfEmployeesErrorMessage: () =>
    screen.queryByText("The number of employees is required."),
};

const submitForm = () =>
  act(async () => {
    userEvent.click(screen.getByRole("button", { name: "Add desk" }));
  });

const renderForTesting = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

describe("<AddNewDeskView />", () => {
  test("all fields are required", async () => {
    // Arrange
    renderForTesting(<AddNewDeskView addDesk={jest.fn()} />);

    // Act
    await submitForm();

    // Assert
    expect(selectors.deskNameErrorMessage()).toBeVisible();
    expect(selectors.numberOfEmployeesErrorMessage()).toBeVisible();
  });

  test("allows the user to provide the information required for adding a new desk", async () => {
    // Arrange
    const addDesk = jest.fn();

    renderForTesting(<AddNewDeskView addDesk={addDesk} />);
    expect(selectors.deskNameErrorMessage()).not.toBeInTheDocument();
    expect(selectors.numberOfEmployeesErrorMessage()).not.toBeInTheDocument();

    // Act
    userEvent.type(selectors.deskNameInput(), "Some awesome desk");
    userEvent.type(selectors.numberOfEmployeesInput(), "50");
    await submitForm();

    // Assert
    expect(addDesk).toHaveBeenCalledTimes(1);
    expect(addDesk).toHaveBeenCalledWith("Some awesome desk", 50);
  });
});
