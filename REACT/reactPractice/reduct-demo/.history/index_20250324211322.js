const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE' // Define action type consts as strings. They're used to identify the type of action being performed.

function BUY_CAKE() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// (previousState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
               
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer)

console.log('initial state',store.getState()) // { numOfCakes: 10 }
const unsubscribe = store.unsubscribe
store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())
store.dispatch(BUY_CAKE())
Unsubscribe()

