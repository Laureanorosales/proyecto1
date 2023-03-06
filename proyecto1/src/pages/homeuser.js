import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
//@mui
import { Button } from "@mui/material";
//next
import { useRouter } from "next/router";

const homeuser = () => {
  const [user, setUser] = useState();
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUser(userData?.trim());
    const isLogged = localStorage.getItem("isLogged");
    setLogged(isLogged);
  }, [user, logged]);

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (!isLogged) {
      router.push("/");
    }
  }, []);

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
        <h2>Bienvenido {userInfo?.nombre}(user)</h2>
        <h2>Seleccione una opcion</h2>
      </div>
      <div>
        <Button
          sx={{ float: "left", marginRight: 2 }}
          onClick={sendToMedicamentos}
          variant="contained"
        >
          Buscar Medicamento
        </Button>
        <Button
          sx={{ float: "left", marginRight: 2 }}
          onClick={sendToDatos}
          variant="contained"
        >
          Mis Datos
        </Button>
      </div>
    </div>
  );
};

export default homeuser;
