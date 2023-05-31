import { createSlice } from '@reduxjs/toolkit';

export const PostSlice = createSlice({
    name: 'post',
    initialState: {
        page: 0,
        posts: [],
        isLoading: false,
    },
    reducers: {
        startLoading: (state, action) => {
            state.isLoading = true;
        },
        setPosts: (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.page = action.payload.page;
            state.posts = action.payload.getPosts;
        },
    }
})

export const { startLoading, setPosts } = PostSlice.actions;