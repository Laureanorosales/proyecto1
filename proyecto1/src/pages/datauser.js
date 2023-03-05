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

  return (
    <div>
      <div>
        <Navbar logged={logged} />
      </div>
      <h2>Mis datos</h2>
      <div>
        <p>Nombre de usuario: {userInfo?.username} </p>
        <p>Contraseña: {userInfo?.password}</p>
        <p>Edad: {userInfo?.edad}</p>
        <p>Domicilio: {userInfo?.dom}</p>
        <p>Rol: {userInfo?.role}</p>
      </div>
      <div>
        <Button onClick={sendToHomeUser} variant="contained">
          Salir
        </Button>
      </div>
    </div>
  );
};

export default datauser;
