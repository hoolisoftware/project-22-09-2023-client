import {
    Button,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from '@mui/material'
  import { Link as RouterLink } from 'react-router-dom';
  
  import type { Bar } from '@/global/models';
  import { StyledTableCell, StyledTableRow } from '@/components/Table';
  
  import EditIcon from '@mui/icons-material/Edit';
  import AddIcon from '@mui/icons-material/Add';
  
  
  const rows: Bar[] = [
    { id: 1, name: 'Burger King', branches: 34 },
    { id: 2, name: 'KFC', branches: 55 },
    { id: 3, name: 'Mc Donalds', branches: 12 }
  ];
  
  export default function CustomizedTables() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell width={100}>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Branches amount</StyledTableCell>
              <StyledTableCell align="right" width={200}>
                <Button
                  to='/bars/create/'
                  component={RouterLink}
                  fullWidth
                  size='small'
                  variant='contained'
                  color='success'
                  startIcon={<AddIcon/>}
                >
                  CREATE
                </Button>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.branches}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    to={`/bars/${row.id}/update/`}
                    component={RouterLink}
                    startIcon={<EditIcon/>}
                    size='small'
                    variant='contained'
                    fullWidth
                  >
                    EDIT
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }