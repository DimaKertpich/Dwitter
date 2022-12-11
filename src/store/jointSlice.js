import { createSlice } from '@reduxjs/toolkit';

const jointSlice = createSlice({
    name: "joint",
    initialState:{
        controlLogin: false,
        controlRegistr: false
    },
    reducers:{
        activeLogin(state, action){
            state.controlLogin = action.payload
        },

        activeRegistr(state, action){
            state.controlRegistr = action.payload
        }
    }
});

export const {activeLogin, activeRegistr} = jointSlice.actions;
export default jointSlice.reducer;
