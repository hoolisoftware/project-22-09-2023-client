import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { RootState } from "@/app/store";
import type { APIListBranch } from "@/global/models";
import { useBranches } from "@/hooks/agent";

interface Props {
  selected: APIListBranch | null
  setSelected: CallableFunction
}

export default function Asynchronous(props: Props) {
  const { data, error, isLoading } = useBranches();
  const branch = useSelector((state: RootState) => state.filters.branch)

  if (error instanceof Error) return error.message 

  return (
    <>
      <Autocomplete
        loading={isLoading}
        onChange={ (_, value) => props.setSelected(value) }
        disablePortal
        options={data?.results ? data.results : []}
        getOptionLabel={option => option.address}
        defaultValue={ branch }
        renderInput={(params) => <TextField {...params} label="Branch" fullWidth/>}
      />
    </>
  );
}
