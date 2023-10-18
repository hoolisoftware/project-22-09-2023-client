import { AxiosError } from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { Grid } from "@mui/material"

import { APIOffer } from "@/global/models"
import { organizationsInstance, useOffer, useOfferOptions } from "@/hooks/use-query"
import AutoComplete from '@/components/AutocompleteBar'
import FormObject from '@components/FormObject'


export default function Form() {
    const [ formErrors, setFormErrors ] = useState<{ [key: string]: string[] }>({})
    const [ created, setCreated ] = useState<boolean>(false)

    const { offerId } = useParams()
    const data = useOffer(offerId)
    const options = useOfferOptions();
	const mutation = useMutation({
		mutationFn: async (formData: FormData) => {
			const { data } = await organizationsInstance[offerId ? 'put' : 'post'](`offers/${offerId ? offerId+'/' : ''}`, formData);
			return data as APIOffer
		},
		onSuccess: () => {data.refetch(); setFormErrors({}); setCreated(!offerId)},
		onError: (e) => {
			e instanceof AxiosError && setFormErrors(e.response?.data)
		}
	})

    return (
		<FormObject
			objectId={ offerId }
			objectData={ data }
			objectOptions={ options }
			objectVerboseName={ `Offer ${data.data && data.data.name}` }
			objectMutation={ mutation }
			objectMutationSuccessURL={ `/offers/${ mutation.data && mutation.data.id }/update/` }
			objectMutationSuccessIsPost={ created }
			objectMutationErrors={ formErrors }
			objectOptionsExclude={ ['organization'] }
		>
			<Grid item xs={12}>
				<AutoComplete name='organization' selected={data.data && data.data.organization.id} onChange={ () => {} }/>
			</Grid>
		</FormObject>
	)

}