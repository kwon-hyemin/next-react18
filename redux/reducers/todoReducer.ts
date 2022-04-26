import { createSlice } from "@reduxjs/toolkit"

export interface TodoType{
    userid: string;
    task: string;  
    completed: string; // value is T or F
}

export interface TodoState{
    loading: boolean;
    data: TodoType[];
    loginUser: any;
    error: any;
}

const initialState: TodoState = {
    loading: false,
    data: [],
    loginUser: {
        userid: '',
        task: ''
    },
    error: null
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {}
})
export default todoSlice.reducer