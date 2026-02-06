import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API_url="http://localhost:8888/products";

export const fetchData = createAsyncThunk("/api/fetchdata",async()=>{
    const response=await axios.get(API_url)
    return response.data
})

const apiSlice = createSlice({
    name:"api",
    initialState:{
        data:[],
        status:"idle",
        error:"null"
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status="loading";
        }).addCase(fetchData.fulfilled,(state,action)=>{
            state.data= action.payload
            state.status="succeeded"
        }).addCase(fetchData.rejected,(state,action)=>{
            state.error=action.error.message
            state.status="failed"
        })
    }
})
export default apiSlice.reducer;