import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Import your reducers here

const logger = createLogger();
// Define your Redux store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([thunk, logger])
  // Add middleware or other store configuration here if needed
});

// Define RootState and AppThunk types
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
