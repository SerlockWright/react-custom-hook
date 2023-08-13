import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDataTable } from '../hooks/useDataTable';
// import TablePagination from '@mui/material/TablePagination';

export default function Post() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1'

  const rowPost = useDataTable(apiUrl)
  // const [page, setPage] = React.useState(2);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Body</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rowPost.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>

      {/* The `<TablePagination>` component is used to add pagination functionality to the table. It
      allows the user to navigate between different pages of data and control the number of rows
      displayed per page. */}

      {/* <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </React.Fragment>
  );
}
