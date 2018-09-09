import {createStore} from 'redux'

import {
    counter
} from './reducers'

/**
 * API：subscribe、dispatch、getState
 */
let store = createStore(counter);

export default store;

