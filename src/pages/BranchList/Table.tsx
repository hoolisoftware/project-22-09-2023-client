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
  
  import type { Branch } from '@/global/models';
  import { StyledTableCell, StyledTableRow } from '@/components/Table';
  
  import EditIcon from '@mui/icons-material/Edit';
  import AddIcon from '@mui/icons-material/Add';
  
  
  const rows: Branch[] = [
    { id: 1, address: 'Астраханская область, город Клин, наб. Ломоносова, 15', tables: 50 },
    { id: 2, address: 'Вологодская область, город Серебряные Пруды, бульвар Чехова, 62', tables: 12 },
    { id: 3, address: 'Ивановская область, город Лотошино, шоссе Славы, 01', tables: 56 }
  ];
  
  export default function CustomizedTables() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell width={100}>ID</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Tables amount</StyledTableCell>
              <StyledTableCell align="right" width={200}>
                <Button
                  to='/branches/create/'
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
                <StyledTableCell>{row.address}</StyledTableCell>
                <StyledTableCell>{row.tables}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    to={`/branches/${row.id}/update/`}
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