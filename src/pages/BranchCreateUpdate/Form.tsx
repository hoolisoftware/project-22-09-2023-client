import { AxiosError } from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import {
    Grid,
} from "@mui/material"

import { APIBranch } from "@/global/models"
import { organizationsInstance, useBranch, useBranchOptions } from '@/hooks/use-query'
import AutoComplete from '@/components/AutocompleteBar'
import FormObject from '@/components/FormObject'


export default function Form() {
	const [ formErrors, setFormErrors ] = useState<{ [key: string]: string[] }>({})
	const [ created, setCreated ] = useState<boolean>(false)

    const { branchId } = useParams()
    const data = useBranch(branchId)
    const options = useBranchOptions();
	const mutation = useMutation({
		mutationFn: async (formData: FormData) => {
			const { data } = await organizationsInstance[branchId ? 'put' : 'post'](`branches/${branchId ? branchId+'/' : ''}`, formData);
			return data as APIBranch
		},
		onSuccess: () => {data.refetch(); setFormErrors({}); setCreated(!branchId)},
		onError: (e) => {
			e instanceof AxiosError && setFormErrors(e.response?.data)
		}
	})

	return (
		<FormObject
			objectId={ branchId }
			objectData={ data }
			objectOptions={ options }
			objectOptionsExclude={ ['organization', 'staff'] }
			objectVerboseName={ `Branch with "${data.data && data.data.address}" address` }
			objectMutation={ mutation }
			objectMutationSuccessURL={ `/branches/${ mutation.data && mutation.data.id }/update/` }
			objectMutationSuccessIsPost={ created }
			objectMutationErrors={ formErrors }
		>
			<Grid item xs={12}>
				<AutoComplete name='organization' selected={data.data && data.data.organization.id} onChange={ () => {} }/>
			</Grid>
		</FormObject>
	)
}