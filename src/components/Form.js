import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "", 
    password: ""
  });
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField 
          name="name" 
          type="text" 
          variant="outlined" // Correct variant
          label="Name" // Added label for better UX
          value={inputs.name} // Controlled component
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })} // Handle change
        />
        <TextField 
          name="email" 
          type="email" 
          variant="outlined" // Correct variant
          label="Email" // Added label for better UX
          value={inputs.email} // Controlled component
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })} // Handle change
        />
        <TextField 
          name="password" 
          type="password" 
          variant="outlined" 
          label="Password" 
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })} // Handle change
        />
      </form>
      <Button type='submit '>submit</Button>
    </>
  );
}

export default Form;
