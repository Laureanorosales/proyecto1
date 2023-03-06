import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
// @mui
import { Button, TextField } from "@mui/material";
//next
import { useRouter } from "next/router";

const datauser = () => {
  const [user, setUser] = useState();
  const [logged, setLogged] = useState();
  const router = useRouter();

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (!isLogged) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUser(userData?.trim());
    const isLogged = localStorage.getItem("isLogged");
    setLogged(isLogged);
  }, [user, logged]);

  const userInfo = JSON.parse(user ? user : null);

  const sendToHomeUser = () => {
    router.push("/homeuser");
  };
  console.log(userInfo);

  return (
    <div>
      <div>
        <Navbar logged={logged} />
      </div>
      <h2>Mis datos</h2>
      <div>
        <h4>Id: {userInfo?._id}</h4>
        <h4>Nombre: {userInfo?.nombre}</h4>
        <h4>Apellido: {userInfo?.apellido}</h4>
        <h4>Nombre de usuario: {userInfo?.username} </h4>
        <h4>Edad: {userInfo?.edad}</h4>
        <h4>Domicilio: {userInfo?.dom}</h4>
        <h4>Email: {userInfo?.email}</h4>
        <h4>Rol: {userInfo?.role}</h4>
      </div>
      <div>
        <Button onClick={sendToHomeUser} variant="contained">
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default datauser;
