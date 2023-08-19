import { counterReducer } from "@/app/entities/Counter";
import { StateSchema } from "./StateSchema";
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/app/entities/User";

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
