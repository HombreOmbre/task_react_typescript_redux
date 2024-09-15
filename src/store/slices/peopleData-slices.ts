import { createSlice } from "@reduxjs/toolkit";
import { fetchPeopleData } from "../actions/peopleData-actions.ts";
import { RootState } from "../store.ts";

export interface PersonalInfo {
    id: string,
    name: string,
    username: string,
    email: string,
    address: object,
    phone: string
    website: string
    company: object,
    [key: string]: string | object,
}

export interface PeopleDataState {
    peopleData: PersonalInfo[],
    isLoading: boolean,
    isError: boolean,
}

const initialState: PeopleDataState = {
    peopleData: [],
    isLoading: false,
    isError: false,
}

export const peopleDataSlice = createSlice({
    name: "peopleInfo",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPeopleData.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchPeopleData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.peopleData = action.payload;
            })
            .addCase(fetchPeopleData.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            })
    }
})

export default peopleDataSlice.reducer;
export const peopleAllData = (state: RootState) => state.peopleData;