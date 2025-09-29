import { createSlice } from "@reduxjs/toolkit"

export const initialState = ({
    count: 0
})
/*
    {
        count:0
    }
*/

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1;

        },
        decrement: (state, action) => {
            state.count -= 1;
        },
        reset: (state, action) => {
            state.count = 0;
        }
    }
})

export default countSlice 
