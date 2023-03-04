import * as React from "react";
import Navbar from "@/components/Navbar";
// @mui
import { Button } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const ventas = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
   
  ];

  return (
    <div>
      <Navbar />
      <br />
      <h3>Realizar una venta</h3>
      <p>Ingresar: </p>
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
          />{" "}
          <br />
          <TextField
            required
            id="outlined-required"
            label="Valor"
            defaultValue=""
          />{" "}
          <br />
          <TextField
            required
            id="outlined-required"
            label="Cantidad"
            defaultValue=""
          />
        </div>
        <DataGrid
        rows={""}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      </Box>
    </div>
  );
};

export default ventas;
