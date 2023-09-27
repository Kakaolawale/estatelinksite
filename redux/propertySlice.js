import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

export const fetchProperties = createAsyncThunk('property/fetchProperties', async () => {
const querySnapshot = await getDocs(collection(db, 'properties'));
const properties = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
return properties;
});

export const propertySlice = createSlice({
 name: 'property',
 initialState: {
    properties: [],
 },
 reducers: {
    setProperties: (state, action) => {
        state.properties = action.payload;
    },
 },
 extraReducers: (builder) => {
    builder.addCase(fetchProperties.fulfilled, (state, action) => {
        state.properties = action.payload;
    });
 },
});

export const { setProperties }= propertySlice.actions;
export default propertySlice.reducer;