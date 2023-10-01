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
      //alert(state.rows);
      alert(JSON.stringify(state.rows));
    },
    deleteRow: (state, action) => {
      //state.rows += action.payload
    },
  },
})

export const { addRow, deleteRow } = tableSlice.actions

export default tableSlice.reducer