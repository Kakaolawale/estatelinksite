import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setProperties } = propertySlice.actions;
export default propertySlice.reducer;