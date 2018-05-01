import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware()
    );
}

