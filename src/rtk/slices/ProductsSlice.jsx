
import { createSlice } from '@reduxjs/toolkit'

import allData from '../../Components/Assets/all_product'



export const Products_Slice = createSlice({
    name: 'Products_Slice',
    initialState: {
        items: allData,
    },
    reducers: {},

})



export const { } = Products_Slice.actions;

export default Products_Slice.reducer;