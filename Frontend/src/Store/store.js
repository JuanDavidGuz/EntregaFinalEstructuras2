import { configureStore
} from "@reduxjs/toolkit";
import { PostSlice } from "./Slices/Post/PostSlice";
import { AuthSlice } from "./Slices/auth/AuthSlice";

export const store = configureStore({
   reducer: {
       posts: PostSlice.reducer,
       auth: AuthSlice.reducer,
   },
});