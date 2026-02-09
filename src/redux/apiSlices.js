import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_url = "http://localhost:8888/products";

// 1. Fetching data
export const fetchData = createAsyncThunk("api/fetchdata", async () => {
    const response = await axios.get(API_url);
    return response.data;
});

// 2. Deleting data (Updated to use ID correctly)
export const deleteData = createAsyncThunk("api/deleteProduct", async (id) => {
    // Correct URL format: http://localhost:8888/products/123
    await axios.delete(`${API_url}/${id}`); 
    return id; // Return the ID so the reducer knows which item to remove
});

const apiSlice = createSlice({
    name: "api",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch cases
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = "failed";
            })
            // Delete cases (Updated filtering logic)
            .addCase(deleteData.fulfilled, (state, action) => {
                // Remove the product from local state using the ID returned from thunk
                state.data = state.data.filter((product) => product.id !== action.payload);
                state.status = "succeeded";
                alert("Product deleted Successfully");
            })
            .addCase(deleteData.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = "failed";
            });
    }
});

export default apiSlice.reducer;
