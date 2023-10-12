import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { RootState } from "@/app/store";
import type { APIListOrganization } from "@/global/models";
import { useOrganizations } from "@/hooks/agent";

interface Props {
  selected: APIListOrganization | null
  setSelected: CallableFunction
}

export default function Asynchronous(props: Props) {
  const organization = useSelector((state: RootState) => state.filters.organization)
  const { data, error, isLoading } = useOrganizations();

  if (error instanceof Error) return error.message

  return (
    <>
      <Autocomplete
        loading={isLoading}
        onChange={ (_, value) => props.setSelected(value) }
        disablePortal
        options={data?.results ? data.results : []}
        getOptionLabel={option => option.name}
        defaultValue={ organization }
        renderInput={(params) => <TextField {...params} label="Movie" fullWidth/>}
      />
    </>
  );
}
