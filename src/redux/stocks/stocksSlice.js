import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const STOCKS_API_URL = 'https://financialmodelingprep.com/api/v3/stock-screener?industry=Software—Application&companyName=Micron Technology, Inc.marketCapMoreThan=1000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NYSE&dividendMoreThan=0&limit=100&apikey=c6e0dd810caa318168c7d5a3bd51bfc6';

const initialState = {
  stocksArray: [],
  ifSucceed: false,
  ifLoading: false,
  errors: null,
};

export const fetchStocks = createAsyncThunk('stocks/fetchStocks', async () => {
  try {
    const response = await axios.get(STOCKS_API_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchStocks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        ifSucceed: true,
        stocksArray: action.payload,
      }))
      .addCase(fetchStocks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default stocksSlice.reducer;
