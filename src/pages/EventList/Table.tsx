import css from './index.module.scss'

import { Link as RouterLink } from 'react-router-dom';
import {
    Button,
    IconButton,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Paper,
    Stack
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import InfoIcon from '@mui/icons-material/Info';
import dayjs from 'dayjs';

import { StyledTableCell, StyledTableRow } from '@/components/Table';
import { titleCase } from '../../utils/string';

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
    date: dayjs.Dayjs,
    sport: string,
    league: string,
    country: string,
    timeStart: string,
    teamHome: string,
    teamAway: string,
    riskRate: RiskRate,
    status: 'create' | 'edit' | 'activated'
) {
    return { actionId, date, sport, country, league, timeStart, teamHome, teamAway, riskRate, status };
}

const rows = [
    createData(124, dayjs('03.06.2002'),'Soccer', 'USA', 'Dream League', '12:30', 'Tigers', 'Bears', 'medium', 'edit'),
    createData(125, dayjs('02.06.2002'),'Soccer', 'USA', 'Dream League', '12:30', 'Tigers', 'Bears', 'medium', 'create'),
    createData(126, dayjs('02.06.2002'),'Soccer', 'USA', 'Dream League', '12:30', 'Tigers', 'Bears', 'low', 'activated'),
    createData(127, dayjs('02.06.2002'),'Soccer', 'USA', 'Dream League', '12:30', 'Tigers', 'Bears', 'medium', 'edit'),
    createData(128, dayjs('02.06.2002'),'Soccer', 'USA', 'Dream League', '12:30', 'Tigers', 'Bears', 'high', 'edit'),
]

export default function CustomizedTables() {
    return (
        <TableContainer className={css.tableDesktop} component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell width={150}>
                            <DatePicker
                                label='date'
                                defaultValue={dayjs('02.06.2002')}
                                slotProps={{ textField: { size: 'small' } }}
                            />
                        </StyledTableCell>
                        <StyledTableCell>Action ID</StyledTableCell>
                        <StyledTableCell>Sport</StyledTableCell>
                        <StyledTableCell width={100}>
                            <TextField size='small' label='Country'/>
                        </StyledTableCell>
                        <StyledTableCell>League</StyledTableCell>
                        <StyledTableCell>Start time</StyledTableCell>
                        <StyledTableCell>Home team</StyledTableCell>
                        <StyledTableCell>Away team</StyledTableCell>
                        <StyledTableCell>Risk rate</StyledTableCell>
                        <StyledTableCell align='right' width={100}>Operation</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((item) =>
                            <StyledTableRow key={item.actionId}>
                                <StyledTableCell>{item.date.toDate().getMonth()}.{item.date.toDate().getDate()}.{item.date.toDate().getFullYear()}</StyledTableCell>
                                <StyledTableCell>#{item.actionId}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {item.sport}
                                </StyledTableCell>
                                <StyledTableCell>{item.league}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {item.country}
                                </StyledTableCell>
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
                                    <Stack direction={'row'} gap={1} justifyContent={'end'}>
                                        <Button
                                            fullWidth
                                            to={
                                                item.status === 'create' ? '/events/offers/create' :
                                                '/events/offers/1/update'
                                            }
                                            component={RouterLink}
                                            variant='contained'
                                            color={
                                                item.status === 'create' ? 'success' : 'primary'
                                            }                                        
                                            disabled={ item.status === 'activated' }
                                            size='small'
                                            startIcon={
                                                item.status === 'create' ? <AddIcon/> :
                                                item.status === 'edit' ? <EditIcon/> : <DoneAllIcon/>
                                            }
                                        >
                                            {
                                                item.status === 'create' ? 'CREATE OFFER' :
                                                item.status === 'edit' ? 'EDIT OFFER' : 'ACTIVATED'
                                            }
                                        </Button>
                                        {
                                            item.status === 'activated' &&
                                            <IconButton
                                                size='small'
                                                component={RouterLink}
                                                to={`/events/offers/${item.actionId}`}
                                            >
                                                <InfoIcon/>
                                            </IconButton>
                                        }
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