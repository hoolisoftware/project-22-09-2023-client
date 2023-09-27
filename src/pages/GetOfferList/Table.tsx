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
    low: 'green',
    medium: 'yellow',
    high: 'red'
}

type RiskRate = keyof RiskRateColors

function createData(
    actionId: number,
    sport: string,
    league: string,
    timeStart: string,
    teamHome: string,
    teamAway: string,
    riskRate: RiskRate,
    status: 'create' | 'edit' | 'activated'
) {
    return { actionId, sport, league, timeStart, teamHome, teamAway, riskRate, status };
}

const rows = [
    createData(124, 'Soccer', 'Dream League', '12:30', 'Tigers', 'Bears', 'medium', 'edit'),
    createData(125, 'Soccer', 'Dream League', '12:30', 'Tigers', 'Bears', 'medium', 'create'),
    createData(126, 'Soccer', 'Dream League', '12:30', 'Tigers', 'Bears', 'low', 'activated'),
    createData(127, 'Soccer', 'Dream League', '12:30', 'Tigers', 'Bears', 'medium', 'edit'),
    createData(128, 'Soccer', 'Dream League', '12:30', 'Tigers', 'Bears', 'high', 'edit'),
]

export default function CustomizedTables() {
    return (
        <TableContainer className={css.tableDesktop} component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Sport</StyledTableCell>
                        <StyledTableCell>League</StyledTableCell>
                        <StyledTableCell>Start time</StyledTableCell>
                        <StyledTableCell>Home team</StyledTableCell>
                        <StyledTableCell>Away team</StyledTableCell>
                        <StyledTableCell>Risk rate</StyledTableCell>
                        <StyledTableCell align='right' width={200}>Operation</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((item) =>
                            <StyledTableRow key={item.actionId}>
                                <StyledTableCell component="th" scope="row">
                                    {item.sport}
                                </StyledTableCell>
                                <StyledTableCell>{item.league}</StyledTableCell>
                                <StyledTableCell>{item.timeStart}</StyledTableCell>
                                <StyledTableCell>{item.teamHome}</StyledTableCell>
                                <StyledTableCell>{item.teamAway}</StyledTableCell>
                                <StyledTableCell>
                                    <Stack alignItems={'center'} direction={'row'} gap={2}>
                                        <div
                                            className={css.circleRisk}
                                            style={{backgroundColor: riskRateColors[item.riskRate]}}
                                        ></div>
                                        {titleCase(item.riskRate)} Risk
                                    </Stack>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Button
                                        fullWidth
                                        to={'./submit/'}
                                        component={RouterLink}
                                        variant='contained'
                                        color='success'
                                        size='small'
                                    >
                                        GET OFFER
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