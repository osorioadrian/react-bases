import { useReducer } from 'react'

interface CounterState {
  counter:  number,
  previous: number,
  changes:  number
}

const INITIAL_STATE: CounterState = {
  counter:  0,
  previous: 0,
  changes:  0
}

type CounterAction =
  | { type: 'increaseBy', payload: { value: number } }
  | { type: 'reset' }

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

  const { changes, counter } = state;

  switch (action.type) {
    case 'reset':
      return {
        counter:  0,
        previous: 0,
        changes:  0
      }
    case 'increaseBy':
      return {
        changes: changes + 1,
        counter: counter + action.payload.value,
        previous: counter
      }  
  
    default:
      return state;
  }
}

export const CounterReducerComponent = () => {

  const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch({type: 'reset'})
  }

  const handleIncrement = (value: number) => {
    dispatch({type: 'increaseBy', payload: { value } })
  }

  return (
    <>
        <h1>Counter Reducer: 
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
