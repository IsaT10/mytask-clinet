import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   tasks: []
};

export const getTasks = createAsyncThunk(
   'task/getAll',
   async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json()

      return data.data;
   }
);

export const taskSlice = createSlice({
   name: 'task',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(
         getTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
         }
      );
   },
});

export default taskSlice.reducer;