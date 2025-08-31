import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
       cart: [],
    },
    reducers:{
        //actions
        setCart: (state, action) => {
            state.cart = action.payload;
        },

        addToCart: (state, action) => {
            const existingIndex = state.cart.findIndex(item => item.id === action.payload.id);

            if (existingIndex >= 0) {
                state.cart[existingIndex].quantity += 1;
            } else {
                state.cart = [{ ...action.payload, quantity: 1 }, ...state.cart];
            }
        },

        incrementQuantity : (state, action)=>{
            state.cart = state.cart.map(item => item.id === action.payload.id
                ? { ...item, quantity: (item.quantity) + 1 }
                : item
            );
        },
        decrementQuantity : (state, action)=>{
            state.cart = state.cart.map(item => item.id === action.payload.id
                ? { ...item, quantity: (item.quantity) - 1 }
                : item
            );
        },
        removeFromCart: (state, action)=>{
            //state.cart = state.cart.filter(item => item.id !== action.payload.id);
            state.cart = state.cart.filter(item => item.productId._id !== action.payload.productId);
        },
        clearCart: (state) => {
            state.cart = [];
        }

        
    }
})

export const {setCart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;