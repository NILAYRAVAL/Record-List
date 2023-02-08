import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Files = ({name,email,index,data}) => {
  console.log(data);
  
  return (
    <div className="data_val">
            <h4>{name}</h4>
            <h4>{email}</h4>
            <Stack>
            <Button  color="error" variant="contained">
            <DeleteOutlineIcon/>
          </Button>
          </Stack>
          </div>
          
  )
}

export default Files