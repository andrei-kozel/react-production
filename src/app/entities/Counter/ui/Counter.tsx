import { getCounterValue } from "../model/selector/getCounterValue/getCounterValue"
import { counterActions } from "@/app/entities/Counter/model/slice/counterSlice"
import { useDispatch, useSelector } from "react-redux"

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => dispatch(counterActions.increment())
  const decrement = () => dispatch(counterActions.decrement())

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counterValue}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
