const redux = require('redux')
const createStore = redux.createStore


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

console.log(store.getState()) // { numOfCakes: 10 }

store.dispatch(BUY_CAKE())