import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
// @mui
import { Button } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
const ventas = () => {
  const [meds, setMeds] = useState([]);
  const [med, setMed] = useState({
    NombreMed: "",
    create: true,
    Stock: "",
  });
  const [search, setSearch] = useState("");
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  const getMeds = async () => {
    const { data } = await axios.get("/api/medicamento", {
      params: { search },
    });
    setMeds(data);
  };

  useEffect(() => {
    getMeds();
  }, [search]);

  const columns = [
    {
      field: "NombreMed",
      headerName: "Nombre",
      width: 150,
      editable: true,
    },
    {
      field: "LaboratorioDes",
      headerName: "Laboratorio",
      width: 150,
      editable: true,
    },
    {
      field: "Valor",
      headerName: "Valor",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      width: 110,
      editable: true,
    },
  ];
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      axios.put("api/medicamento", med);
      setMed({
        NombreMed: "",
        create: true,
        Stock: "",
      });
      toast.success("Venta realizada con exito!");
      getMeds();
      // router.push("/homeadmin");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  const handleChange = (e) => {
    setMed({
      ...med,
      [e.target.name]: e.target.value,
    });
  };
  const rows = (meds || []).filter(row => row.Stock > 0 && row.active )
  return (
    <div>
      <Navbar />
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
      <br />
      <div>
        <p>Realizar una venta</p>
        <form onSubmit={handleSubmit}>
          <Box sx={{ width: "400px" }}>
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="Nombre"
              id="nombre"
              value={med.NombreMed}
              name="NombreMed"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="Cantidad"
              id="Stock"
              value={med.Stock}
              name="Stock"
              type="number"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="Valor"
              id="valor"
              name="valor"
              type="number"
              onChange={handleChange}
            />
            <Button variant="contained" type="submit">
              Realizar venta
            </Button>
            </Box>
            </form>
           
      <Box sx={{ height: 400, width: "50%" }}>
        <DataGrid
          rows={meds}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
     
      </div>
      <Button onClick={sendToHomeAdmin} variant="contained">
        Volver al inicio
      </Button>
      
    </div>
  );
};

export default ventas;
