import { createSlice } from "@reduxjs/toolkit"

const init ={ lis:["Model SS","Model 3","Model X","Model Y" ]}

const carSlice = createSlice({
    name:'car',
    initialState:init,
    reducers:{}

})

export const selectCars = state=>state.initialState
export default carSlice.reducers