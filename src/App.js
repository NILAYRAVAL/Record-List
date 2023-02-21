import "./App.css";
import Header from "./components/Header";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function App() {
 
const[name,hii]= useState("");
const[email,hello]= useState("");
const[data,hey]=useState([]);

const addData = () =>{
  hey([...data,{name,email}])
  hii("");
  hello("")
}

const remove =(index) =>{
  let arr =data;
  arr.splice(index, 1);
  hey([...arr]);
}
  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event)=>hii(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
           
            onChange={(event)=>hello(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            Add
          </Button>
        </Stack>
      </div>

                                                     {/* data */}
      <div className="data">
          <div className="data_val">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
          {
            data.map((element,index) => {
              return (
                <div key={index} className="data_val">
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Stack>
            <Button onClick={()=>remove(index)}  color="error" variant="contained">
            <DeleteOutlineIcon/>
          </Button>
          </Stack>
          </div>
              )
            })
          }
      </div>

    </div>
  );
}

export default App;
