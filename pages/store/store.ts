import {configureStore, EnhancedStore} from "@reduxjs/toolkit";
import {GetServerSidePropsContext, GetStaticPropsContext, NextPageContext} from "next";
import {CombinedReducerState, rootReducer} from "./root.reducer";
import {AppContext} from "next/app";
import {createWrapper} from "next-redux-wrapper";
import * as process from "process";
import { Store } from 'redux'

export type MakeStoreContext = NextPageContext | AppContext | GetStaticPropsContext | GetServerSidePropsContext

// eslint-disable-next-line import/no-mutable-exports
export let store: EnhancedStore

export const makeStore = (context: MakeStoreContext) => {
    // 2: Add an extra parameter for applying middleware:
    store = configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware: any) => {
            return [
                ...getDefaultMiddleware({serializableCheck: false})
            ]
        }

    })

    return store
}

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
    debug: process.env.NODE_ENV !== 'production',
    serializeState: state => {
        // Hack needed to avoid JSON-Serialization validation error from Next.js https://github.com/zeit/next.js/discussions/11209
        // >>> Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value all together.
        return JSON.stringify(state)
    },
    deserializeState: state => {
        return typeof state === 'string' ? JSON.parse(state) : state
    },
})

export type RootState = CombinedReducerState