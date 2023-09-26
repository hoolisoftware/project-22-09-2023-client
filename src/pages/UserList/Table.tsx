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

import type { User } from '@/global/models';
import { StyledTableCell, StyledTableRow } from '@/components/Table';

import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';


const rows: User[] = [
  { id: 1, username: 'lama', barname: 'Burger King', role: 'superadmin' },
  { id: 2, username: 'hoolisoftware', barname: 'Burger King', role: 'superadmin' },
  { id: 3, username: 'jfiow', barname: 'Burger King', role: 'admin' },
  { id: 4, username: 'vanjiro', barname: 'Burger King', role: 'staff' },  
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell width={100}>ID</StyledTableCell>
            <StyledTableCell>Bar Name</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Role</StyledTableCell>
            <StyledTableCell align="right" width={200}>
              <Button
                to='/users/create/'
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
              <StyledTableCell>{row.barname}</StyledTableCell>
              <StyledTableCell>{row.username}</StyledTableCell>
              <StyledTableCell>{row.role}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  to='/users/1/update/'
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