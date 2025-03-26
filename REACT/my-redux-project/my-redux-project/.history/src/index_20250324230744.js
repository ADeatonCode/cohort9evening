const BUY_CAKE = 'BUY_CAKE';

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

function cakeReducer(state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ... state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}