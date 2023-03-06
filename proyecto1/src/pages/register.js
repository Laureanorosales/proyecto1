import React, { useState } from "react";
import Navbar from "@/components/Navbar";
//@mui
import { TextField, Button } from "@mui/material";
//react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//axios
import axios from "axios";
//next
import { useRouter } from "next/router";
import { Box } from "@mui/system";

const register = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
    tel: "",
    email: "",
    edad: "",
    dom: "",
    nombre: "",
  });
  const [userDelete, setUserDelete] = useState({
    username: "",
  });
  const handleChangeDelete = (e) => {
    setUserDelete({
      ...userDelete,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await axios.put("api/user", userDelete);
      toast.success("Baja realizada con exito!");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("api/user", user);
      setUser({
        username: "",
        password: "",
        role: "",
        tel: "",
        email: "",
        edad: "",
        dom: "",
        nombre: "",
      });
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
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
      <div>
        <h2>Alta de cliente</h2>
        <h2>Ingrese:</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <Box sx={{ width: "400px" }}>
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="Nombre"
              id="nombre"
              value={user.nombre}
              name="nombre"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="usuario"
              id="username"
              value={user.username}
              name="username"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="password"
              id="password"
              value={user.password}
              name="password"
              onChange={handleChange}
            />{" "}
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="rol"
              id="role"
              value={user.role}
              name="role"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="telefono"
              id="tel"
              value={user.tel}
              name="tel"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="email"
              id="email"
              value={user.email}
              name="email"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="edad"
              id="edad"
              value={user.edad}
              name="edad"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="domicilio"
              id="dom"
              value={user.dom}
              name="dom"
              onChange={handleChange}
            />{" "}
            <Button sx={{ marginBottom: 2 }} variant="contained" type="submit">
              Dar de alta
            </Button>
          </Box>
        </form>
      </div>
      <div>
        <h2 sx={{ marginTop: 5 }}>Baja Cliente</h2>
        <h2>Ingrese:</h2>
        <form onSubmit={handleDelete}>
          <Box sx={{ width: "400px" }}>
            <TextField
              sx={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}
              variant="filled"
              label="usuario"
              id="username"
              value={userDelete.username}
              name="username"
              onChange={handleChangeDelete}
            />
            <Button sx={{}} variant="contained" type="submit">
              Dar de baja
            </Button>
          </Box>
          <Button
            sx={{ marginTop: 3 }}
            onClick={sendToHomeAdmin}
            variant="contained"
          >
            Volver al inicio
          </Button>
        </form>
      </div>
    </div>
  );
};

export default register;
