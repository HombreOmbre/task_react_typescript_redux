import { configureStore} from "@reduxjs/toolkit";
import peopleDataReducer from "./slices/peopleData-slices.ts";
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        peopleData: peopleDataReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()