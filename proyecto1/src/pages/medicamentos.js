import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { TextField, Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
//@mui
import axios from "axios";
//next
import { useRouter } from "next/router";
//react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const medicamentos = () => {
  const [meds, setMeds] = useState([]);
  const [med, setMed] = useState({
    NombreMed: "",
    create: true,
    Stock: "",
  });
  const [search, setSearch] = useState("");
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (!isLogged) {
      router.push("/");
    }
  }, []);
  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    setLogged(isLogged);
  }, [logged]);

  const getMeds = async () => {
    const { data } = await axios.get("/api/medicamento", {
      params: { search },
    });
    setMeds(data);
  };

  useEffect(() => {
    getMeds();
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  

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

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
      <div>
        <p>Nombre de producto</p>

        <TextField
          sx={{ marginBottom: "10px", marginTop: "20px" }}
          variant="filled"
          label="Buscar"
          onChange={handleSearch}
        />
      </div>
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
      <div>
       
      </div>
    </div>
  );
};

export default medicamentos;
