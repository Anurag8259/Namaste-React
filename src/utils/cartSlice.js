import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    // "reducers" - Contains multiple reducers inside it , so (s).
    reducers : {
        addItem : (state,action) => {
            // We are directly mutating the state here 
            // In Vanilla Redux , modifying of state was prohibiter
            // Instead we used to create a copy of state 
            // newState = [...state];
            // newState.items.push(action.payload);
            // return newState;
            // Redux is still doing this BTS.
            // It is using "immer" library to do this.
            // IMMER = Current state + draft state => new state

            //In latest Redux Toolkit , we have to mutate state and return is not mandatory
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            // state = ["Anurag"];
            // This will not work , as it just changes the reference and not the actual state.
            // "state" is a local variable , so when we write the above line , "state" just ponts to [...] instead of mutating the state.
        
            // Mutation
            state.items.length = 0;
            // OR
            // Either mutate existing state or return a new state.
            // return {items : []};
        }
    }
});

export const {addItem , removeItem , clearCart} = cartSlice.actions;

// You are exporting one reducer , so its "reducer"
export default cartSlice.reducer;