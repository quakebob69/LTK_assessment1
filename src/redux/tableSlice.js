import { createSlice } from '@reduxjs/toolkit'

function createData(todo) {
  return { todo };
}

export const tableSlice = createSlice({
  name: 'tableData',
  initialState: {
    rows: []
  },
  reducers: {
    addRow: (state, action) => {
      state.rows = [createData(action.payload.todo), ...state.rows];
    },
    deleteRow: (state, action) => {
      state.rows = state.rows.filter((_, index) => index !== action.payload)
    },
  },
})

export const { addRow, deleteRow } = tableSlice.actions

export default tableSlice.reducer