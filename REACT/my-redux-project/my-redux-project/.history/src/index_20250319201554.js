const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE,
        payload: 'Red Velvet Cake',
        info: 'First Redux action'
    }
}

// (previousState, action) => newState
// State has to be represented by an object

const initialState = {

}