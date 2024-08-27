import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '@redux/loginSlice';
import profileReducer from '@redux/profileSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
});

export default store;
