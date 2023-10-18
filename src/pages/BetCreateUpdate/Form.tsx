import { AxiosError } from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { Grid } from "@mui/material"

import { APIBet, APIBranch, APIOffer } from "@/global/models"
import { organizationsInstance, useBet, useBetOptions } from "@/hooks/use-query"
import FormObject from '@components/FormObject'
import APIField from "@/components/APIField"


export default function Form() {
    const [ formErrors, setFormErrors ] = useState<{ [key: string]: string[] }>({})
    const [ created, setCreated ] = useState<boolean>(false)

    const { betId } = useParams()
    const data = useBet(betId)
    const options = useBetOptions();
	const mutation = useMutation({
		mutationFn: async (formData: FormData) => {
			const { data } = await organizationsInstance[betId ? 'put' : 'post'](`bets/${betId ? betId+'/' : ''}`, formData);
			return data as APIBet
		},
		onSuccess: () => {data.refetch(); setFormErrors({}); setCreated(!betId)},
		onError: (e) => {
			e instanceof AxiosError && setFormErrors(e.response?.data)
		}
	})

    console.log(data)

    return (
		<FormObject
			objectId={ betId }
			objectData={ data }
			objectOptions={ options }
			objectVerboseName={ `Bet with ${data.data && data.data.id} id` }
			objectMutation={ mutation }
			objectMutationSuccessURL={ `/bets/${ mutation.data && mutation.data.id }/update/` }
			objectMutationSuccessIsPost={ created }
			objectMutationErrors={ formErrors }

            objectOptionsExclude={ ['offer', 'branch'] }
		>
             { options.data &&
                <>
                    <Grid item xs={12}>
                        <APIField
                            field={options.data && options.data.actions.POST.offer}
                            data={data.data}
                            getDefaultValue={(value: APIOffer)=>value.id}
                            name='offer'
                            errors={formErrors['offer']}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <APIField
                            field={options.data && options.data.actions.POST.branch}
                            data={data.data}
                            getDefaultValue={(value: APIBranch)=>value.id}
                            name='branch'
                            errors={formErrors['branch']}
                        />
                    </Grid>
                </>
             }
        </FormObject>
	)

}