import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
//react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//axios
import axios from "axios";
//next
import { useRouter } from "next/router";
const stock = () => {
  const [user, setUser] = useState();
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUser(userData?.trim());
    const isLogged = localStorage.getItem("isLogged");
    setLogged(isLogged);
  }, [logged]);

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (!isLogged) {
      router.push("/");
    }
  }, []);

  const [med, setMed] = useState({
    NombreMed: "",
    LaboratorioDes: "",
    Valor: 0,
    Stock: 0,
  });
  const [medDelete, setMedDelete] = useState({
    NombreMed: "",
  });

  const handleChange = (e) => {
    setMed({
      ...med,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeDelete = (e) => {
    setMedDelete({
      ...medDelete,
      [e.target.name]: e.target.value,
    });
  };
  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await axios.put("api/medicamento", medDelete);
      toast.success("Baja realizada con exito!");
      // router.push("/homeadmin");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("api/medicamento", med);
      toast.success("Alta realizada con exito!");
      // router.push("/homeadmin");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  const sendToHomeAdmin = () => {
    router.push("/homeadmin");
  };
  return (
    <div>
      <Navbar />
      <br />
      <h2>Dar de alta un producto</h2>
      <form onSubmit={handleSubmit}>
        <Box sx={{ width: "400px" }}>
          <div></div>
          <div>
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="Nombre"
              id="NombreMed"
              value={med.NombreMed}
              name="NombreMed"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="Laboratorio"
              id="LaboratorioDes"
              value={med.LaboratorioDes}
              name="LaboratorioDes"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="Valor"
              id="Valor"
              value={med.Valor}
              name="Valor"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="Stock"
              id="Stock"
              value={med.Stock}
              name="Stock"
              onChange={handleChange}
            />
          </div>
        </Box>
        <Button type="submit" variant="contained">
          Dar de Alta
        </Button>
      </form>

      <br />
      <br />

      <h2>Dar de baja un producto</h2>
      <form onSubmit={handleDelete}>
        <Box sx={{ width: "400px" }}>
          <div></div>
          <div>
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="Nombre"
              id="NombreMed"
              value={medDelete.NombreMed}
              name="NombreMed"
              onChange={handleChangeDelete}
            />
          </div>
        </Box>
        <Button type="submit" variant="contained">
          Dar de Baja
        </Button>
      </form>
      <br></br>
      <br></br>
      <Button onClick={sendToHomeAdmin} variant="contained">
        Volver al inicio
      </Button>
    </div>
  );
};

export default stock;
