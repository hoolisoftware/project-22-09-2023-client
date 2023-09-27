import css from './index.module.scss'

import {
    Button,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Stack
} from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';

import type { HistoryRecord } from '@/global/models';
import { titleCase } from '../../utils/string';
import { StyledTableCell, StyledTableRow } from '@/components/Table';


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

const rows: HistoryRecord[]  = [
    {
        date: '02.06.2023',
        sport: 'soccer',
        league: 'Dream League',
        teamHome: 'ЦСКА (Москва)',
        teamAway: 'Спартак (Москва)',
        tableNumber: 2,
        riskRate: 'low',
        result: 'won'
    },
    {
        date: '02.06.2023',
        sport: 'soccer',
        league: 'Dream League',
        teamHome: 'ЦСКА (Москва)',
        teamAway: 'Спартак (Москва)',
        tableNumber: 2,
        riskRate: 'low',
        result: 'loose'
    },
    {
        date: '02.06.2023',
        sport: 'soccer',
        league: 'Dream League',
        teamHome: 'ЦСКА (Москва)',
        teamAway: 'Спартак (Москва)',
        tableNumber: 2,
        riskRate: 'low',
        result: 'pending'
    }
]

export default function CustomizedTables() {
    return (
        <TableContainer className={css.tableDesktop} component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Sport</StyledTableCell>
                        <StyledTableCell>League</StyledTableCell>
                        <StyledTableCell>Home team</StyledTableCell>
                        <StyledTableCell>Away team</StyledTableCell>
                        <StyledTableCell>Table number</StyledTableCell>
                        <StyledTableCell>Risk rate</StyledTableCell>
                        <StyledTableCell align='right' width={100}>
                            <Button
                                variant='contained'
                                color='success'
                                size='small'
                                startIcon={<DownloadIcon/>}
                            >
                                EXPORT
                            </Button>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((item) =>
                            <StyledTableRow key={item.date}>
                                <StyledTableCell>{item.date}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {item.sport}
                                </StyledTableCell>
                                <StyledTableCell>{item.league}</StyledTableCell>
                                <StyledTableCell>{item.teamHome}</StyledTableCell>
                                <StyledTableCell>{item.teamAway}</StyledTableCell>
                                <StyledTableCell>{item.tableNumber}</StyledTableCell>
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
                                    <Stack direction={'row'} gap={1} justifyContent={'end'}>
                                        <Button
                                            fullWidth
                                            variant='contained'
                                            color={
                                                item.result === 'won' ? 'success' :
                                                item.result === 'loose' ? 'error' :
                                                'primary'
                                            }                                        
                                            disabled={item.result==='pending'}
                                            size='small'
                                        >
                                            {
                                                item.result === 'won' ? 'WON' :
                                                item.result === 'loose' ? 'LOOSE' : 'PENDING...'
                                            }
                                        </Button>
                                    </Stack>
                                </StyledTableCell>
                            </StyledTableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}