import { AxiosError } from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"

import { APIOrganization } from "@/global/models"
import { organizationsInstance, useOrganization, useOrganizationOptions } from "@/hooks/use-query"
import FormObject from '@components/FormObject'


export default function Form() {
    const [ formErrors, setFormErrors ] = useState<{ [key: string]: string[] }>({})
    const [ created, setCreated ] = useState<boolean>(false)

    const { barId } = useParams()
    const data = useOrganization(barId)
    const options = useOrganizationOptions();
	const mutation = useMutation({
		mutationFn: async (formData: FormData) => {
			const { data } = await organizationsInstance[barId ? 'put' : 'post'](`organizations/${barId ? barId+'/' : ''}`, formData);
			return data as APIOrganization
		},
		onSuccess: () => {data.refetch(); setFormErrors({}); setCreated(!barId)},
		onError: (e) => {
			e instanceof AxiosError && setFormErrors(e.response?.data)
		}
	})

    return (
		<FormObject
			objectId={ barId }
			objectData={ data }
			objectOptions={ options }
			objectVerboseName={ `Bar ${data.data && data.data.name}` }
			objectMutation={ mutation }
			objectMutationSuccessURL={ `/bars/${ mutation.data && mutation.data.id }/update/` }
			objectMutationSuccessIsPost={ created }
			objectMutationErrors={ formErrors }
		/>
	)

}