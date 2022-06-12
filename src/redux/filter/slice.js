import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  }
}
 
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategiriId (state, action) {
      console.log('action setCategiriId', action)
      state.categoryId = action.payload
    },
    setSort (state, action) {
      console.log('action setCategiriId', action)
      state.sort = action.payload
    }
  },
})

export const { setCategiriId, setSort } = filterSlice.actions

export default filterSlice.reducer