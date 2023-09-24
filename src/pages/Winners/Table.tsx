import css from './index.module.scss'

import { styled } from '@mui/material/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
} from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import DoneAllIcon from '@mui/icons-material/DoneAll';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    tableNumber: number,
    result: string,
    offer: string,
    status: string,
) {
    return { tableNumber, result, offer, status };
}

const rows = [
    createData(1, 'Draw', '20% discount on all soft drinks', 'waiting'),
    createData(2, 'Chelsea', '20% discount on all soft drinks', 'waiting'),
    createData(3, 'Madrid', '20% discount on all soft drinks', 'paid'),
]

export default function CustomizedTables() {
    return (
        <TableContainer className={css.tableDesktop} component={Paper}>
            <Table sx={{ minWidth: 900 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Table №</StyledTableCell>
                        <StyledTableCell align="center">Result</StyledTableCell>
                        <StyledTableCell align="right">Offer</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map(row =>
                            <StyledTableRow key={row.tableNumber}>
                                <StyledTableCell>#{row.tableNumber}</StyledTableCell>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {
                                        row.status === 'paid' && 
                                        <Typography color='success'>
                                            Chelsea
                                        </Typography>
                                    }
                                    {
                                        row.status === 'waiting' &&
                                        <Typography color='primary'>
                                            <HourglassBottomIcon/>
                                        </Typography>
                                    }
                                </StyledTableCell>
                                <StyledTableCell align="right" component="th" scope="row">
                                    {row.offer}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                        {
                                            row.status === 'paid' && 
                                            <Typography color='success'>
                                                <DoneAllIcon/>
                                            </Typography>
                                        }
                                        {
                                            row.status === 'waiting' &&
                                            <Typography color='primary'>
                                                <HourglassBottomIcon/>
                                            </Typography>
                                        }
                                </StyledTableCell>
                            </StyledTableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}