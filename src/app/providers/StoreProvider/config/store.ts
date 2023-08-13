import { counterReducer } from "@/app/entities/Counter";
import { StateSchema } from "./StateSchema";
import { configureStore } from "@reduxjs/toolkit";

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
