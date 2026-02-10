import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_url = "http://localhost:8888/products";

// 1. Fetching data
export const fetchData = createAsyncThunk("/api/fetchdata", async () => {
    const response = await axios.get(API_url);
    return response.data;
});

// 2. Deleting data (Updated to use ID correctly)
export const deleteData = createAsyncThunk("/api/deleteProduct", async (id) => {
    // Correct URL format: http://localhost:8888/products/123
    await axios.delete(`${API_url}/${id}`); 
    return id; // Return the ID so the reducer knows which item to remove
});

export const updateData = createAsyncThunk("/api/updateData",async({id,updateProduct})=>{
    const response=await axios.put(`${API_url}/${id}`,updateProduct)
    console.log(response.data)
    return response.data
})

const apiSlice = createSlice({
    name: "api",
    initialState: {
        products: [],
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
                state.products = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = "failed";
            })
            // Delete cases (Updated filtering logic)
            .addCase(deleteData.fulfilled, (state, action) => {
                // Remove the product from local state using the ID returned from thunk
                state.products = (state.products).filter((product) => product.id !== action.payload);
                state.status = "succeeded";
                alert("Product deleted Successfully");
            })
            .addCase(deleteData.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = "failed";
            })
            // .addCase(updateData.fulfilled, (state, action) => {
            //     // Remove the product from local state using the ID returned from thunk
            //     state.products = state.products.map((p) => p.id === action.payload.id ? action.payload:p);
            //     state.status = "succeeded";
            //     alert("Product updated Successfully");
            // })

            .addCase(updateData.fulfilled, (state, action) => {
                // action.meta.arg contains the data you SENT to the thunk ({id, updateProduct})
                // action.payload contains what the API SENT BACK
                
                const { id, updateProduct } = action.meta.arg;
                
                const index = state.products.findIndex((product) => product.id == id);
                if (index !== -1) {
                    // Option A: Use action.payload if API returns the FULL object
                    // state.data[index] = action.payload; 

                    // Option B: Merge local changes with state (Safest if API only returns ID)
                    state.products[index] = { ...state.products[index], ...updateProduct };
                }
                state.status = "succeeded";
            })

            .addCase(updateData.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = "failed";
            });
    }
});

export default apiSlice.reducer;
