const BUY_CAKE = 'BUY_CAKE';
import buyCake from './../.history/src/index_20250319201146';

function buyCake() {
    return {
        type: BUY_CAKE,
        payload: 'Red Velvet Cake',
        info: 'First Redux action'
    }
}

// (previousState, action) => newState
// State has to be represented by an object and the name of this object is initialState

const initialState = {
    numOfCakes: 10
}

function cakeReducer(state = initialState, action) {
    switch (buyCake.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}