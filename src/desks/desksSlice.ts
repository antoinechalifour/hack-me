import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState, AppThunk } from "../store";
import { Desk } from "./Desk";

type DesksState = Record<string, Desk>;

const initialState: DesksState = {};

export const desksSlice = createSlice({
  name: "desks",
  initialState,
  reducers: {
    deskCreated: (state, action: PayloadAction<Desk>) => {
      state[action.payload.id] = action.payload;
    },
  },
});

const { deskCreated } = desksSlice.actions;

export const addNewDesk =
  (name: string, numberOfEmployees: number): AppThunk =>
  async (dispatch, getState, { desks, navigator }) => {
    const desk = await desks.save(name, numberOfEmployees);

    dispatch(deskCreated(desk));

    navigator.push("/desks");
  };

export const desksReducer = desksSlice.reducer;

export const allDesks = createSelector(
  (state: AppState) => state.desks,
  (desks) => Object.values(desks)
);
