import {createSlice} from '@reduxjs/toolkit';

export const CommentSlice = createSlice({
    name: 'comment',
    initialState: {
        comment: 0,
    },
    reducers: {
        increment:(state, action) => {
            state.comment += 1;
        }
    }
})

export const CommentAction = CommentSlice.actions;

export default CommentSlice;