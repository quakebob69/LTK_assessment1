import { createSlice } from '@reduxjs/toolkit'

function createData(todo) {
  return { todo };
}

const rowz = [
  createData('From REDUX'),
];

export const tableSlice = createSlice({
  name: 'tableData',
  initialState: {
    rows: rowz
  },
  reducers: {
    addRow: state => {
      //state.value += 1
    },
    deleteRow: (state, action) => {
      //state.value += action.payload
    },
  },
})

export const { addRow, deleteRow } = tableSlice.actions

export default tableSlice.reducer