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
    const userData = localStorage.getItem("user");
    setUser(userData?.trim());
    const isLogged = localStorage.getItem("isLogged");
    setLogged(JSON.parse(isLogged));
    if (!logged) {
      router.push("/");
    }
  }, [user, logged]);
  
  const userInfo = JSON.parse(user ? user : null);
  console.log('userdata', typeof logged)

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
        <h4>Nombre de usuario: {userInfo?.username} </h4>
        <h4>Contraseña: {userInfo?.password}</h4>
        <h4>Edad: {userInfo?.edad}</h4>
        <h4>Domicilio: {userInfo?.dom}</h4>
        <h4>Rol: {userInfo?.role}</h4>
        <h4>Estado: {userInfo?.active}</h4>
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
