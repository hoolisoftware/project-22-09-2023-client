import css from './index.module.scss'

import { useState } from 'react'
import { styled } from '@mui/material/styles';
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    Link
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { tableCellClasses } from '@mui/material/TableCell';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import PaidModal from './PaidModal'


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
    const [paidDialog, setPaidDialog] = useState<boolean>(false)

    return (
        <>
            <TableContainer className={css.tableDesktop} component={Paper}>
                <Table sx={{ minWidth: 900 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Table №</StyledTableCell>
                            <StyledTableCell>Sport</StyledTableCell>
                            <StyledTableCell>Teams</StyledTableCell>
                            <StyledTableCell>Result</StyledTableCell>
                            <StyledTableCell>Offer</StyledTableCell>
                            <StyledTableCell align="right" width={100}>Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map(row =>
                                <StyledTableRow key={row.tableNumber}>
                                    <StyledTableCell>#{row.tableNumber}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        <Typography color='success'>
                                            Soccer
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        <Typography>
                                            <Typography component={'span'} color='primary'>
                                                Chelsea
                                            </Typography>
                                            &nbsp;VS&nbsp;
                                            <Typography component={'span'} color='primary'>
                                                Madrid
                                            </Typography>
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        <Typography color='success'>
                                            Chelsea
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        <Link to='#' component={RouterLink}>
                                            {row.offer}
                                        </Link>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                            {
                                                row.status === 'paid' && 
                                                <Button fullWidth color='success' disabled startIcon={<DoneAllIcon/>}>
                                                    PAID
                                                </Button>
                                            }
                                            {
                                                row.status === 'waiting' &&
                                                <Button fullWidth color='success' variant='outlined' startIcon={<HourglassBottomIcon/>} onClick={ () => setPaidDialog(true) }>
                                                    WAITING
                                                </Button>
                                            }
                                    </StyledTableCell>
                                </StyledTableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <PaidModal active={paidDialog} setActive={setPaidDialog}/>
        </>
    );
}