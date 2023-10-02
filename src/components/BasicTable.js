import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteRow } from './../redux/tableSlice'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import Paper from '@mui/material/Paper';

export default function BasicTable() {
  const rows = useSelector(state => state.tableData.rows);
  const dispatch = useDispatch();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead />
        <TableBody>
          {rows.map((row, postIndex) => (
            <TableRow
              key={row.todo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontSize: '24px', color: '#888888' }}>
                {row.todo}
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(deleteRow(postIndex))}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}