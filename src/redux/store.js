import { configureStore } from "@reduxjs/toolkit";
import apiReducer from './apiSlices'

const store = configureStore({
    reducer:{
        api:apiReducer
    }
})

export default store;