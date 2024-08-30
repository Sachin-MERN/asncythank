import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// creat action

const createThunk = createAsyncThunk("createThunk", async( data,{rejectWithValue})=>{ // createAsyncThunk this the middle wear to hundle the data
   const resp = await fetch('https://65afc08e2f26c3f2139baeaa.mockapi.io/userDetails',{
    method:'POST',
    headers:{"content-type":"application/json"},
    body:JSON.stringify(data)// this data is come from the userFroms component
   })
   try{
  const result = resp.json();// we take the response 
  return result;
} catch(error){ // hundling the error is here
    return rejectWithValue(error)
}
})



const userSlice = createSlice({
    name:'userDetail', // in slice we have to use this field name
    initialState:{ // you can define here or top of the this function also fine initialState
        user:[],
        loading: false,
        error: null,
        extraReducer:{ // this used to pass reducer  to multiple slice
            [createThunk.pending]:(state)=>{ // here we hundle the promises like fillfull,reject,pending in extraReducer
                state.loading = true
            },
            [createThunk.fullfill]:(state,action)=>{
                state.loading = false
                state.user.push(action.payload)
            },
            [createThunk.rejected]:(state,action)=>{
                state.loading = false
                state.user.push = action.payload
            }
            
        }
    }
    
});

export default userSlice.reducer;


