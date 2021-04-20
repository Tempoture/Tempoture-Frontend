import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: {
            isAuthenticated: false,
            SpotifyId: "",
            Token: "",
            RefreshToken: "",
        }
    },
    reducers:{
        updateSlice: (state, action) => {
            state.userData = action.payload;
        }
        
    }
})

export const { updateSlice } = userSlice.actions;
export const selectUser = (state) => state.user.userData;

export default userSlice.reducer;