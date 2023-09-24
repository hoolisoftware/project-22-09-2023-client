import css from './index.module.scss'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';

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
        <>
            <TableContainer className={css.tableDesktop} component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Action ID</StyledTableCell>
                            <StyledTableCell align="right">Sport</StyledTableCell>
                            <StyledTableCell align="right">League</StyledTableCell>
                            <StyledTableCell align="right">Home team</StyledTableCell>
                            <StyledTableCell align="right">Away team</StyledTableCell>
                            <StyledTableCell align="right">Risk rate</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow key={row.actionId}>
                            <StyledTableCell>#{row.actionId}</StyledTableCell>
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
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer className={css.tableMobile} component={Paper}>
                <Table aria-label="customized table">
                    <TableBody>
                        <StyledTableRow key={row.actionId}>
                            <StyledTableCell>ActionID</StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                #{row.actionId}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow key={row.actionId}>
                            <StyledTableCell>Sport</StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                {row.sport}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow key={row.actionId}>
                            <StyledTableCell>League</StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                {row.league}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow key={row.actionId}>
                            <StyledTableCell>Home team</StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                {row.teamHome}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow key={row.actionId}>
                            <StyledTableCell>Away team</StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                {row.teamAway}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow key={row.actionId}>
                            <StyledTableCell>Risk rate</StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                <Stack alignItems={'center'} direction={'row'} justifyContent={'end'} gap={2}>
                                    {titleCase(row.riskRate)} Risk
                                    <div
                                        className={css.circleRisk}
                                        style={{backgroundColor: riskRateColors[row.riskRate]}}
                                    ></div>
                                </Stack>
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}