import { createAsyncThunk, createSlice, isFulfilled, isPending } from "@reduxjs/toolkit";
import { User, UserService } from "bigeus-sdk";

export const fetchEditors = createAsyncThunk(
    'user/fetchEditors',
    async function () {
        const editors = await UserService.getAllEditors()
        return editors

    }
)

interface UserSliceState {
    editors: User.EditorSummary[],
    fetching: boolean
}

const initialState: UserSliceState = {
    editors: [],
    fetching: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addMatcher(isPending, (state) => {
            state.fetching = true
        }).addMatcher(isFulfilled, (state) => {
            state.fetching = false;
        })
    }
})

export const userReducer = userSlice.reducer;