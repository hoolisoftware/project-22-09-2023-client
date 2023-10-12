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
  
  import { useOrganizations } from '@/hooks/agent';
  import type { APIListOrganization } from '@/global/models';
  import { StyledTableCell, StyledTableRow } from '@/components/Table';
  
  import EditIcon from '@mui/icons-material/Edit';
  import AddIcon from '@mui/icons-material/Add';  
  

  export default function CustomizedTables() {
    const { data, isLoading, error } = useOrganizations()

    if (isLoading) return 'loading...'
    if (error instanceof Error) return error.message

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
            {Array.isArray(data?.results) && data.results.map((item: APIListOrganization) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.id}
                </StyledTableCell>
                <StyledTableCell>{item.name}</StyledTableCell>
                <StyledTableCell>{item.branches_count}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    to={`/bars/${item.id}/update/`}
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