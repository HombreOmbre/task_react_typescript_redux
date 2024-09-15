import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPeopleData = createAsyncThunk(
    'peopleData/fetchPeopleData',
    async () => {
             const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');

             if (!response.ok) {
                 throw new Error(response.statusText);
             }

            return response.json();
    });