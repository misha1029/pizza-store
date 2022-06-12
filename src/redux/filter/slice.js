import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  currentPage: 1,
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
    },
    setCurrentPage (state, action) {
      console.log('action setCategiriId', action)
      state.currentPage = action.payload
    }
  },
})

export const { setCategiriId, setSort, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer