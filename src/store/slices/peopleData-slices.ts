import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchPeopleData } from "../actions/peopleData-actions.ts";
import { RootState } from "../store.ts";

export interface PersonalInfo {
    id: number,
    name: string,
    username: string,
    email: string,
    address: object,
    phone: string
    website: string
    company: object
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
    reducers: {
        replacePeopleData(state: PeopleDataState, action: PayloadAction<PersonalInfo[]>) :void {
            state.peopleData = action.payload ? action.payload : [];
        },
        setIsLoading(state: PeopleDataState, action: PayloadAction<boolean>): void {
            state.isLoading = action.payload;
        },
        setIsError(state: PeopleDataState, action: PayloadAction<boolean>): void {
            state.isError = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPeopleData.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchPeopleData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.peopleData = action.payload;
            })
            .addCase(fetchPeopleData.rejected, state => {
                state.isError = true;
                state.isLoading = false;
            })
    }
})

export default peopleDataSlice.reducer;
export const peopleAllData = (state: RootState) => state.peopleData;
export const {
    replacePeopleData,
    setIsLoading,
    setIsError } = peopleDataSlice.actions;