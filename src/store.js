import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { REHYDRATE } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const initialState = {
  siteID: '',
  details: [],
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SITE':
      return { ...state, siteID: action.payload };
    case 'SET_DETAILS':
      return { ...state, details: action.payload };
    case REHYDRATE:
      return { ...state, ...action.payload.reducer, rehydrated: true };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
