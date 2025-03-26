const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE,
        payload: 'Red Velvet Cake',
        info: 'First Redux action'
    }
}

// (previousState, action) => newState

co