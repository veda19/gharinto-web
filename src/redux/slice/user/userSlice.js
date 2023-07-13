import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
// require('dotenv').config()

const initialState = {
    loading: false,
    error: null,
    user: {},
    profile: {},
    userAuth: {}
}

/**
 * Get User Profile Action - using a dummy endpoint temporarily
 */
export const getProfileAction = createAsyncThunk(
    "users/getProfile",
    async (payload, { rejectWithvalue, getState, dispatch}) => {
        try {
            const { data } = await axios.get("https://dummyjson.com/users?limit=1")
            return data
        } catch (error) {
            return rejectWithvalue(error?.response?.data?.message)
        }
        
    }
)

/**
 * User Slice
 */
const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        //profile
        builder.addCase(getProfileAction.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getProfileAction.fulfilled, (state, action) => {
            state.loading = false
            state.profile = action.payload
        })
        builder.addCase(getProfileAction.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.profile = {}
        })
    }
})

/**
 * User Reducer
 */
const userReducer = userSlice.reducer

export default userReducer
