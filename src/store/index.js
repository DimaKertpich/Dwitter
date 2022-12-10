import { configureStore } from "@reduxjs/toolkit";
import jointReducer from "./jointSlice";
import userReducer from './userSlice';

export default configureStore({

    reducer:{
        joint: jointReducer,
        user: userReducer
    }

});