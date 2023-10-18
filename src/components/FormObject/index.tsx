import { UseQueryResult, UseMutationResult } from "@tanstack/react-query"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import {
    Alert,
    Box,
    Grid,
} from "@mui/material"

import { APIOptions } from "@/global/api"
import { APIModel } from "@/global/models"
import ModalObjectDelete from '@components/ModalObjectDelete'
import APIField from "@/components/APIField"

import Buttons from './Buttons'

interface Props
{
    objectId?: string
    objectData: UseQueryResult<APIModel>
    objectOptions: UseQueryResult<APIOptions>
    objectOptionsExclude?: string[]
    objectVerboseName: string
    objectMutation: UseMutationResult<unknown, unknown, FormData, unknown>
    objectMutationSuccessIsPost: boolean
    objectMutationSuccessURL: string
    objectMutationErrors: { [key: string]: string[] },

    children?: React.ReactElement | string
}

export default function Form(props: Props) {

    const {
        objectId,
        objectData,
        objectOptions,
        objectOptionsExclude,
        objectVerboseName,
        objectMutation,
        objectMutationSuccessURL,
        objectMutationSuccessIsPost,
        objectMutationErrors,
    } = props

    const [ modalDelete, setModalDelete ] = useState<boolean>(false)

	if (objectOptions.isLoading || (objectId && objectData.isLoading)) return "Loading..."
	if (objectOptions.error instanceof Error) return objectOptions.error.message
	if (objectId && objectData.error instanceof Error) return objectData.error.message

    if (!objectId && objectMutation.isSuccess) return <Navigate to={objectMutationSuccessURL}/>

    const getFields = () => {
		if (objectOptions.data) {
			const fields = objectOptions.data.actions.POST
			return Object.keys(fields)
				.filter((item) => !fields[item].read_only)
				.filter((item) => objectOptionsExclude ? !objectOptionsExclude.includes(item) : true)
		}
	}

    return (
        <Box>
            {
				objectMutation.isSuccess &&
				<Alert variant='outlined' sx={{mb: 3}}>
					{
						objectMutationSuccessIsPost ?
						`${objectVerboseName} created successfully!` :
						`${objectVerboseName} updated successfully!`
					}
				</Alert>
			}
            <form
				onSubmit={(e) => {
					e.preventDefault()
					objectMutation.mutate(new FormData(e.currentTarget))
				}}
			>
                <Box>
                    <Grid container spacing={2}>
                        {
                            props.children
                        }
                        { objectOptions.data &&
                            getFields()?.map((item) => (
                                <Grid key={item} item xs={12}>
                                    <APIField errors={objectMutationErrors[item]} name={item} data={objectData.data} field={objectOptions.data?.actions.POST[item]} />
                                </Grid>
						)) }
						<Buttons
                            objectId={objectId}
                            setModalDelete={setModalDelete}
                        />
                    </Grid>
                </Box>
            </form>
			{
				objectId &&
				<ModalObjectDelete
                    objectId={objectId}
					active={modalDelete}
					setActive={ setModalDelete }
					onOk={ () => console.log('delete?') }
					value={ objectVerboseName }
				/>
			}
        </Box>
    )
}