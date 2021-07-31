import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { AppState, AppThunk } from "../store";
import { Desk } from "./Desk";

type DesksState = Record<string, Desk>;

const initialState: DesksState = {};

export const desksSlice = createSlice({
  name: "desks",
  initialState,
  reducers: {
    deskAvailable: (state, action: PayloadAction<Desk>) => {
      state[action.payload.id] = action.payload;
    },
  },
});

const { deskAvailable } = desksSlice.actions;

export const addNewDesk =
  (name: string, numberOfEmployees: number): AppThunk =>
  async (dispatch, getState, { desks, navigator }) => {
    const desk = await desks.save(name, numberOfEmployees);

    dispatch(deskAvailable(desk));
    navigator.push("/desks");
  };

export const updateDeskInformation =
  (desk: Desk): AppThunk =>
  async (dispatch, getState, { desks, navigator }) => {
    const updatedDesk = await desks.update(desk);

    dispatch(deskAvailable(updatedDesk));
    navigator.push("/desks");
  };

export const requestDesk =
  (deskId: string): AppThunk =>
  async (dispatch, getState, { desks, navigator }) => {
    try {
      const desk = await desks.ofId(deskId);

      dispatch(deskAvailable(desk));
    } catch (err) {
      navigator.push("/desks");
    }
  };

export const desksReducer = desksSlice.reducer;

export const allDesks = createSelector(
  (state: AppState) => state.desks,
  (desks) => Object.values(desks)
);

export const deskById = (state: AppState, id: string) => state.desks[id];
