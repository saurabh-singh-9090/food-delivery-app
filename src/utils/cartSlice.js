import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {    // Initial value of the redux store for cartSlice
        items:[]
    },
    reducers: {
        //below fns are the reducer functions which are mapped to corresponding actions. 'state' refers to the current state of the reducer
        // action is an object which contains data into the 'payload' key which is passed during dispatching a function from any component
        addItem: (state, action) => {
            //mutating the redux state here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0; // []
            // state=[]; // original state won't change by assigning [] to the state.
            // NOTE: in RTK, we either mutate the existing state or return a new state.
            // return {items:[]} // this replaces the original state of the redux
        },
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

// 'reducer' is the combination of many small reducer functions like addItem, removeItem, clearCart
export default cartSlice.reducer;