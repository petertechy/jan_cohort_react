import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        count: 0,
        allStudents: [],
        allProducts: []
    },
    reducers: {
        increment: (state)=>{
            state.count += 1
        },
        decrement: (state)=>{
            state.count -=1
        },
        increaseByNumber: (state, action)=>{
            state.count += action.payload
        }
    }

})

export const {increment, decrement, increaseByNumber} = counterSlice.actions

export default counterSlice.reducer
