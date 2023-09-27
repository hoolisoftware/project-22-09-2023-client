import css from './index.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { StyledTableCell, StyledTableRow } from '@/components/Table';

interface RiskRateColors
{
    low: string
    medium: string
    high: string
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
) {
    return { actionId, sport, league, timeStart, teamHome, teamAway, riskRate };
}

const row = createData(124, 'Soccer', 'Dream League', '12:30', 'Tigers', 'Bears', 'medium')

export default function CustomizedTables() {

    return (
        <>
            <TableContainer className={css.tableDesktop} component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">Sport</StyledTableCell>
                            <StyledTableCell align="right">League</StyledTableCell>
                            <StyledTableCell align="right">Start time</StyledTableCell>
                            <StyledTableCell align="right">Home team</StyledTableCell>
                            <StyledTableCell align="right">Away team</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell align="right" component="th" scope="row">
                                {row.sport}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.league}</StyledTableCell>
                            <StyledTableCell align="right">{row.timeStart}</StyledTableCell>
                            <StyledTableCell align="right">{row.teamHome}</StyledTableCell>
                            <StyledTableCell align="right">{row.teamAway}</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer className={css.tableMobile} component={Paper}>
                <Table aria-label="customized table">
                    <TableBody>
                        <StyledTableRow>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell>Sport</StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                {row.sport}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell>League</StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                {row.league}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell>Home team</StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                {row.teamHome}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell>Away team</StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                {row.teamAway}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell>Match starts at</StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                {row.timeStart}
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}