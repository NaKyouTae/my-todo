import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoItemInterface} from "../model/interfaces";
import {RootState} from "../../pages/store/store";

const initialState = ():TodoItemInterface => {
    return {
        title: "",
        detail: ""
    }
}

const slice = createSlice({
    initialState: initialState(),
    name: 'todoItem',
    reducers: {
        setDetail: (state, action: PayloadAction<string>) => {
            state.detail = action.payload
        },
    },
})

const state = (state: RootState): TodoItemInterface => state.ui.todo

// action creator
export const executeTodoItemAction = slice.actions

// selector
export const selectTodoItem = createSelector(state, state => state)
export const selectTodoTitle = createSelector(state, state => state.title)
export const selectTodoDetail = createSelector(state, state => state.detail)

// reducer
export const todoReducer = slice.reducer