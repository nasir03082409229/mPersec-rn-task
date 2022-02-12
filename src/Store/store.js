import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers';

const store = createStore(Reducers, applyMiddleware(thunk));

store.subscribe(async() => {
    console.log('STATE=>', JSON.stringify(store.getState()));
});
export { persistor, store };