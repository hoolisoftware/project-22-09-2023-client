import type { Key, ReactNode } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { useState } from 'react'
import {
	Button,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Stack,
	IconButton
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { APIModel } from '@/global/models';
import { APIList } from '@/global/api';
import { StyledTableCell, StyledTableRow } from '@/components/Table';
import ModalObjectDelete from '@components/ModalObjectDelete'

type tableMethod = 'create' | 'retrieve' | 'update' | 'delete'

interface Column {
	field: string
	label?: string
	render?: CallableFunction
	width?: string | number
	align?: 'center' | 'left' | 'right' | 'inherit' | 'justify' | undefined
}

interface Props {
	data: UseQueryResult<APIList<APIModel>>
	availableMethods: tableMethod[]
	columns: Column[]

	urlCreate: string
	getUrlRetrieve?: CallableFunction
	getUrlUpdate?: CallableFunction
	getUrlDelete?: CallableFunction

	page?: number
	setPage?: CallableFunction
	pageSize?: number

	getModalDeleteObjectString?: CallableFunction
}


export default function CustomizedTables(props: Props) {
	const {
		data,
		availableMethods,
		columns,
		urlCreate,
		getUrlUpdate,

		getModalDeleteObjectString
	} = props

	const [modalDelete, setModalDelete] = useState({
		active: false,
		objectId: '',
		message: '',
		id: 0
	})

	if (data.isLoading) return 'loading...'
	if (data.error instanceof Error) return data.error.message

	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead>
						<TableRow>
							{
								columns.map(column =>
									<StyledTableCell key={column.field} width={column.width} align={column.align}>
										{column.label || column.field }
									</StyledTableCell>
								)
							}
							<StyledTableCell align='right'>
								{
									availableMethods.includes('create')
									&&
									<Stack width={150} marginLeft={'auto'}>
										<Button
											fullWidth
											to={urlCreate}
											component={RouterLink}
											size='small'
											variant='contained'
											color='success'
											startIcon={<AddIcon />}
										>
											CREATE
										</Button>
									</Stack>
								}
							</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.data && data.data?.results.map((item) => (
							<StyledTableRow key={item.id as Key}>
								{
									columns.map(column=>
										<StyledTableCell key={column.field} align={column.align}>
											{column.render ? column.render(item[column.field]) : item[column.field] as ReactNode}
										</StyledTableCell>										
									)
								}
								<StyledTableCell align='right'>
									<Stack
										width={150}
										marginLeft={'auto'}
										direction={'row'}
										gap={1}
									>
										{
											availableMethods.includes('update') &&
											<Button
												to={getUrlUpdate && getUrlUpdate(item)}
												component={RouterLink}
												startIcon={<EditIcon />}
												size='small'
												variant='contained'
												fullWidth
											>
												EDIT
											</Button>
										}
										{
											availableMethods.includes('delete') &&
											<IconButton
												size='small'
												color='error'
												onClick={
													() => setModalDelete({
														...modalDelete,
														active: true,
														objectId: String(item.id),
														message: getModalDeleteObjectString ? getModalDeleteObjectString(item) : item.id
													})
												}
											>
												<DeleteIcon />
											</IconButton>
										}
									</Stack>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{/* {
				setPage &&
				<Pagination page={page} setPage={setPage} pageSize={pageSize} count={data.data && data.data.count || 1} refetch={data.refetch}/>
			} */}
			<ModalObjectDelete
				setActive={(value: boolean) => setModalDelete({ ...modalDelete, active: value })}
				active={modalDelete.active}
				value={modalDelete.message}
				objectId={modalDelete.id}
			/>
		</>
	);
}