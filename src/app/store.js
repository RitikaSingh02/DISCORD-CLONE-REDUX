import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/UserSlice';
import appReducer from '../features/counter/AppSlice';

export default configureStore({
  reducer: {
   user: userReducer,
   app: appReducer,
  },
});
