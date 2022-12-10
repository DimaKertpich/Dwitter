import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {}
    },

    reducers: {
        saveUser(state, action){
            state.user = action.payload
            console.log(state.user)
        }
    }  
})

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;