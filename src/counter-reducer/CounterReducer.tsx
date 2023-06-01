import { useReducer } from 'react'
import { CounterState } from './interfaces/counter.interface';
import { counterReducer } from './state/couterReducer';
import { doIncreaseBy, doReset } from './actions/counter.action';

const INITIAL_STATE: CounterState = {
  changes:  0,
  counter:  0,
  previous: 0
}

export const CounterReducerComponent = () => {

  const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch( doReset() )
  }

  const handleIncrement = (value: number) => {
    dispatch(doIncreaseBy(value))
  }

  return (
    <>
        <h1>Counter Reducer Segmentado: 
          <pre>
            { JSON.stringify( counterState, null, 2 )}
          </pre>
        </h1>

        <button onClick={ handleReset }>reset</button>
        <button onClick={ () => handleIncrement(1) }>+1</button>
        <button onClick={ () => handleIncrement(5) }>+5</button>
        <button onClick={ () => handleIncrement(10) }>+10</button>
    </>
  )
}
