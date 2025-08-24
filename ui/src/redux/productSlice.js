import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name:"product",
    initialState:{
       products: [],
    },
    reducers:{
        //actions
        setProducts: (state, action)=>{
            state.products = action.payload;
        },
        addProduct: (state, action) => {
            state.products = [action.payload, ...state.products];
        }
    }
})

export const {setProducts, addProduct} = productSlice.actions;
export default productSlice.reducer;