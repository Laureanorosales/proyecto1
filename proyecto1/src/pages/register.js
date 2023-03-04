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
  });
  const [userDelete, setUserDelete] = useState({
    username: "",
  });
  const handleChangeDelete = (e) => {
    setUserDelete({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setUser({
      ...userDelete,
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
      });
      toast.success("Alta realizada con exito!");
      router.push("/homeadmin");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  return (
    <div>
      <Navbar />
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
      <div>
        <p>Alta de cliente</p>
        <p>Ingrese:</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <Box sx={{ width: "400px" }}>
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
              label="urol"
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
            />{" "}
            <Button sx={{ float: "right" }} variant="contained" type="submit">
              Dar de alta
            </Button>
          </Box>
        </form>
      </div>
      <div>
        <p>Baja Cliente</p>
        <p>Ingrese:</p>
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
            <Button sx={{ float: "right" }} variant="contained" type="submit">Dar de baja</Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default register;
