import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { desksReducer } from "./desks/desksSlice";
import { Desk } from "./desks/Desk";

export interface DesksRepository {
  save(name: string, numberOfEmployees: number): Promise<Desk>;
  update(desk: Desk): Promise<Desk>;
  ofId(deskId: string): Promise<Desk>;
}

export interface Navigator {
  currentUrl(): string;
  push(path: string): void;
}

export interface Dependencies {
  desks: DesksRepository;
  navigator: Navigator;
}

export const createStore = (dependencies: Dependencies) =>
  configureStore({
    reducer: {
      desks: desksReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: dependencies },
      }),
  });

export type Store = ReturnType<typeof createStore>;

export type AppState = ReturnType<Store["getState"]>;
export type AppDispatch = ReturnType<Store["dispatch"]>;
export type AppThunk = ThunkAction<void, AppState, Dependencies, Action>;
