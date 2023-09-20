import React,{useState, useReducer} from 'react'

const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}


const reducer = (state, action)=> {
    switch(action.type) {
        case ACTIONS.INCREMENT: 
            return {
                ...state,
                count: state.count+1
            }
        case ACTIONS.DECREMENT: 
            return {
                ...state,
                count: state.count-1
            }
        default:
            return state
    }
}

const UseReducerCounter = () => {
    
    const [state, dispatch ] = useReducer(reducer, {count: 0})
    const increment = () => {
        //setCount(prevCount => prevCount+1)
        dispatch({
            type: ACTIONS.INCREMENT
        })
    }
    const decrement = () => {
        // setCount(prevCount => prevCount-1)
        dispatch({
            type: ACTIONS.DECREMENT
        })
    }
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default UseReducerCounter