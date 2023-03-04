import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
const stock = () => {
  return (
    <div>
      <Navbar />
      <br />
      <h2>Dar de alta un producto</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div></div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Nombre"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="Laboratorio"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="Stock"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="Valor"
            defaultValue=""
          />
        </div>
      </Box>
      <Button variant="contained">Dar de Alta</Button>

      <br />
      <br />

      <h2>Dar de baja un producto</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div></div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Nombre"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="Laboratorio"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="Stock"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="Valor"
            defaultValue=""
          />
        </div>
      </Box>
      <Button variant="contained">Dar de Baja</Button>
    </div>
  );
};

export default stock;
