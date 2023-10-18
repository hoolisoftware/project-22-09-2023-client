import {
    Box,
    Pagination as P
} from '@mui/material';


interface Props
{
    page: number
    setPage: CallableFunction
    pageSize: number
    count: number
    refetch: CallableFunction
}

export default function Pagination(props: Props) {
    return (
        <Box sx={{my: 4}}>
            <P
                page={props.page}
                count={ Math.ceil(props.count/props.pageSize) }
                variant="outlined"
                shape="rounded"
                onChange={ (_, page) => {
                    props.setPage(page); props.refetch()
                } }
            />
        </Box>
    );
}