import css from './index.module.scss'

import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Stack
} from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import { titleCase } from '../../utils/string';

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

interface RiskRateColors
{
    low: string
    medium: string
    high: string
}

const riskRateColors: RiskRateColors = {
    low: 'yellow',
    medium: 'green',
    high: 'red'
}

type RiskRate = keyof RiskRateColors

function createData(
    actionId: number,
    sport: string,
    league: string,
    teamHome: string,
    teamAway: string,
    riskRate: RiskRate,
) {
    return { actionId, sport, league, teamHome, teamAway, riskRate };
}

const row = createData(124, 'Soccer', 'Dream League', 'Tigers', 'Bears', 'medium')

export default function CustomizedTables() {
    return (
        <TableContainer className={css.tableDesktop} component={Paper}>
            <Table sx={{ minWidth: 900 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Action ID</StyledTableCell>
                        <StyledTableCell align="right">Sport</StyledTableCell>
                        <StyledTableCell align="right">League</StyledTableCell>
                        <StyledTableCell align="right">Home team</StyledTableCell>
                        <StyledTableCell align="right">Away team</StyledTableCell>
                        <StyledTableCell align="right">Risk rate</StyledTableCell>
                        <StyledTableCell align="right">Operation</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow key={row.actionId}>
                        <StyledTableCell>#8001</StyledTableCell>
                        <StyledTableCell align="right" component="th" scope="row">
                            {row.sport}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.league}</StyledTableCell>
                        <StyledTableCell align="right">{row.teamHome}</StyledTableCell>
                        <StyledTableCell align="right">{row.teamAway}</StyledTableCell>
                        <StyledTableCell align="right">
                            <Stack alignItems={'center'} direction={'row'} justifyContent={'end'} gap={2}>
                                {titleCase(row.riskRate)} Risk
                                <div
                                    className={css.circleRisk}
                                    style={{backgroundColor: riskRateColors[row.riskRate]}}
                                ></div>
                            </Stack>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Button
                                to='/offers/create'
                                component={RouterLink}
                                variant='contained'
                                color='primary'
                                size='small'
                                startIcon={<EditIcon/>}>
                                EDIT OFFER
                            </Button>
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={row.actionId}>
                        <StyledTableCell>#1221</StyledTableCell>
                        <StyledTableCell align="right" component="th" scope="row">
                            {row.sport}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.league}</StyledTableCell>
                        <StyledTableCell align="right">{row.teamHome}</StyledTableCell>
                        <StyledTableCell align="right">{row.teamAway}</StyledTableCell>
                        <StyledTableCell align="right">
                            <Stack alignItems={'center'} direction={'row'} justifyContent={'end'} gap={2}>
                                {titleCase(row.riskRate)} Risk
                                <div
                                    className={css.circleRisk}
                                    style={{backgroundColor: riskRateColors[row.riskRate]}}
                                ></div>
                            </Stack>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Button
                                to='/offers/create'
                                component={RouterLink}
                                variant='outlined'
                                disabled
                                color='primary'
                                size='small'
                                startIcon={<DoneAllIcon/>}>
                                DONE
                            </Button>
                        </StyledTableCell>
                    </StyledTableRow>
                    {
                        [234897, 324, 1289, 462, 142123].map((item) =>
                            <StyledTableRow key={row.actionId}>
                                <StyledTableCell>#{item}</StyledTableCell>
                                <StyledTableCell align="right" component="th" scope="row">
                                    {row.sport}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.league}</StyledTableCell>
                                <StyledTableCell align="right">{row.teamHome}</StyledTableCell>
                                <StyledTableCell align="right">{row.teamAway}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Stack alignItems={'center'} direction={'row'} justifyContent={'end'} gap={2}>
                                        {titleCase(row.riskRate)} Risk
                                        <div
                                            className={css.circleRisk}
                                            style={{backgroundColor: riskRateColors[row.riskRate]}}
                                        ></div>
                                    </Stack>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button
                                        to='/offers/create'
                                        component={RouterLink}
                                        variant='contained'
                                        color='success'
                                        size='small'
                                        startIcon={<AddIcon/>}>
                                        Create Offer
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}