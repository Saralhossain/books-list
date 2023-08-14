import { createAsyncThunk ,createSlice } from '@reduxjs/toolkit'
import { API_KEY } from '../Components/Constants';


export const fetchBookList = createAsyncThunk(
    'books/fetchBookList',
    async (thunkAPI) => {
      const response = await fetch('https://books-list-api.vercel.app/books', {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': API_KEY.api_key,
        },
      });
    const data = await response.json();
    return data;
  }
)

export const bookSlice = createSlice({
  name: 'counter',
  initialState: {
    books:null,
  },
  reducers: {
    setBookLists: (state , action) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBookList.fulfilled, (state, action) => {
      // console.log(action.payload.data);
      state.books = action.payload.data;
    });
  },
})

export const { setBookLists } = bookSlice.actions


export default bookSlice.reducer