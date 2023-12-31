import { StateSchema } from "../config/StateSchema"
import { createReduxStore } from "@/app/providers/StoreProvider/config/store"
import { ReactNode } from "react"
import { Provider } from "react-redux"

interface StoreProviderProps {
  children?: ReactNode,
  initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props

  const store = createReduxStore()

  return (
    <Provider store={store}>{children}</Provider>
  )
}
