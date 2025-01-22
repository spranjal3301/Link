"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import AutmationReducer from '@/redux/reducer/automation'

const rootReducer = combineReducers({
  AutmationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware) => (
    getDefaultMiddleware({
      serializableCheck:false
    })
  ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
