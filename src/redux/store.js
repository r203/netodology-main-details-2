import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import servicesReducer from './servicesSlice'
import serviceReducer from './serviceSlice'
import rootSaga from "./sagas/index.js";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    service: serviceReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);