import { configureStore } from "@reduxjs/toolkit";
import userDetailSlice from "../features/userDetailSlice";

// this is the user Details shop here we can get all the user related information 

export const UserStore = configureStore({
    reducer:{
        app:userDetailSlice 
    }

})