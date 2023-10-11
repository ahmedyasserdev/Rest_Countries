import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const countriesApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});

export const fetchCountryByName = createAsyncThunk(
  'countries/fetchCountryByName',
  async (name) => {
    const url = `name/${name}`;
    const response = await countriesApi.get(url);
    return response.data;
  }
);

export const fetchCountryByRegion = createAsyncThunk(
  'countries/fetchCountryByRegion',
  async (region) => {
    const url = `region/${region}`;
    const response = await countriesApi.get(url);
    return response.data;
  }
);

export const fetchAllCountries = createAsyncThunk(
  'countries/fetchAllCountries',
  async () => {
    const url = `all`;
    const response = await countriesApi.get(url);
    return response.data;
  }
);

export const fetchCountryDetails = createAsyncThunk(
  'countries/fetchCountryDetails',
  async (cca2) => {
    const url = `alpha/${cca2}`;
    const response = await countriesApi.get(url);
    return response.data;
  }
);

const initialState = {
  countries: [],
  countryDetails: [],
  loading: false,
  error: ""
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, { payload }) => {
      state.countries = payload;
    },
  },
  extraReducers: {
    [fetchCountryByName.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [fetchCountryDetails.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [fetchCountryByName.fulfilled]: (state, { payload }) => {
      state.countries = payload;
      state.loading = false;
    },
    [fetchCountryByName.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
    [fetchCountryByRegion.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [fetchCountryByRegion.fulfilled]: (state, { payload }) => {
      state.countries = payload;
      state.loading = false;
    },
    [fetchCountryByRegion.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
    [fetchAllCountries.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [fetchAllCountries.fulfilled]: (state, { payload }) => {
      state.countries = payload;
      state.loading = false;
    },
    [fetchAllCountries.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
    [fetchCountryDetails.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
    [fetchCountryDetails.fulfilled]: (state, { payload }) => {
      state.countryDetails = payload;
      state.loading = false;
    },
  }
});

export const { setCountries } = countriesSlice.actions;
export const getCountries = (state) => state.countries.countries;
export const getLoading = (state) => state.countries.loading;
export const getError = (state) => state.countries.error;
export const getDetails = (state) => state.countries.countryDetails;

export default countriesSlice.reducer;