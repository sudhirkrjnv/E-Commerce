import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartSlice from "./cartSlice.js";
import productSlice from "./productSlice.js";
import authSlice from "./authSlice.js";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    cart:cartSlice,
    auth:authSlice,
    products:productSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;