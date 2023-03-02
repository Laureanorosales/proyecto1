import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
//@mui
import { Button } from "@mui/material";
//next
import { useRouter } from "next/router";

const homeuser = () => {
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

  const sendToMedicamentos = () => {
    router.push("/medicamentos");
  };
  const sendToDatos = () => {
    router.push("/datauser");
  };

  return (
    <div>
      <Navbar logged={logged} />
      <div>
        <p>Bienvenido {userInfo?.username}</p>
        <p>Seleccione una opcion</p>
      </div>
      <div>
        <Button onClick={sendToMedicamentos} variant="contained">
          Buscar Medicamento
        </Button>
        <Button onClick={sendToDatos} variant="contained">
          Mis Datos
        </Button>
      </div>
    </div>
  );
};

export default homeuser;
