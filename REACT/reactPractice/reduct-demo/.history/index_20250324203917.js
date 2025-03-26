const BUY_CAKE = 'BUY_CAKE'

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
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}
}