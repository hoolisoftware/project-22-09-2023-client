import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useOrganizations } from "@/hooks/agent";

interface Props {
  selected: boolean;
  setSelected: CallableFunction;
}

export default function Asynchronous(props: Props) {
  const { data } = useOrganizations();
  console.log(data);

  return (
    <>
      {props.selected}
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={data?.results ? data.results : []}
        getOptionLabel={option => option.name}
        renderInput={(params) => <TextField {...params} label="Movie" fullWidth/>}
      />
    </>
  );
}
