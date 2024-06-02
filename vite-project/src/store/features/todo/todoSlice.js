import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: "wake up"},
    {id: 2, name: "make coffee"},
];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {}
})

export default todoSlice.reducer;