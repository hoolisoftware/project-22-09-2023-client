import { AxiosError } from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
	Grid,
} from "@mui/material";

import { APIUser } from "@/global/models"
import { useUser, usersInstance, useUserOptions } from "@/hooks/use-query"
import RoleSelect from "./RoleRadioGroup";
import FormObject from '@/components/FormObject'


export default function Form() {
	const { userId } = useParams();

	const [ formErrors, setFormErrors ] = useState<{ [key: string]: string[] }>({})
	const [ created, setCreated ] = useState<boolean>(false)

	const data = useUser(userId)
	const options = useUserOptions();

	const mutation = useMutation({
		mutationFn: async (formData: FormData) => {
			const { data } = await usersInstance[userId ? 'put' : 'post'](`users/${userId ? userId+'/' : ''}`, formData);
			return data as APIUser
		},
		onSuccess: () => {setFormErrors({}), data.refetch, setCreated(!userId)},
		onError: (e) => {
			e instanceof AxiosError && setFormErrors(e.response?.data)
		}
	})

	return (
		<FormObject
			objectId={ userId }
			objectData={ data }
			objectOptions={ options }
			objectOptionsExclude={ ['role'] }
			objectVerboseName={ `User ${data.data && data.data.username}` }
			objectMutation={ mutation }
			objectMutationSuccessURL={ `/users/${ mutation.data && mutation.data.id }/update/` }
			objectMutationSuccessIsPost={ created }
			objectMutationErrors={ formErrors }
		>
			<Grid item xs={12}>
				<RoleSelect
					errors={formErrors?.role}
					helperText={options.data?.actions.POST.role.help_text}
					roles={options.data?.actions.POST.role.choices}
					defaultValue={ data.data && data.data.role }
				/>
			</Grid>	
		</FormObject>
	)

}
