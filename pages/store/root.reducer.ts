import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper";
import deepmerge from "deepmerge";
import {uiReducer} from "../../features/reducer/ui.reducer";

export const combinedReducer = combineReducers({
    ui: uiReducer
})

export type CombinedReducerState = ReturnType<typeof combinedReducer>

export const rootReducer: Reducer = (state: CombinedReducerState, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = deepmerge(state, action.payload, {
            arrayMerge: (destinationArray, sourceArray, options) => sourceArray,
        })
        return nextState
    }

    return combinedReducer(state, action)
}

export default rootReducer