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



const initialState = {
    countries: [],
    countryDetails: [],
    loading: false,
    error: ""
}

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {

        setCountries: (state, { payload }) => {
            state.countries = payload;
        },

    },
    extraReducers: {
        [fetchCountryByName.rejected]: (state, { payload }) => {
            state.error = payload.error
            state.loading = false
        },
        [fetchCountryByName.pending]: (state,) => {
            state.loading = true
        },

        [fetchCountryByRegion.pending]: (state,) => {
            state.loading = true

        },
        [fetchAllCountries.pending]: (state,) => {
            state.loading = true
      
        },


        [fetchCountryByName.fulfilled]: (state, { payload }) => {
            state.countries = payload
            state.loading = false
        },
        [fetchCountryByRegion.fulfilled]: (state, { payload }) => {
            state.countries = payload
            state.loading = false
        },
        [fetchAllCountries.fulfilled]: (state, { payload }) => {
            state.countries = payload
            state.loading = false
        },
     
    }
})


export const { setCountries } = countriesSlice.actions
export const getCountries = (state) => state.countries.countries


export default countriesSlice.reducer