import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

//@mui
import { Button } from "@mui/material";
// next
import { useRouter } from "next/router";

const homeadmin = () => {
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

  const sendToVenta = () => {
    router.push("/ventas");
  };
  const sendToRegister = () => {
    router.push("/register");
  };
  const sendToStock = () => {
    router.push("/stock");
  };
  const sendToData = () => {
    router.push("/datauser");
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2>Bienvenido {userInfo?.nombre}</h2>
        <h2>Seleccione una opcion</h2>
      </div>
      <div>
        <Button
          sx={{ float: "left",marginRight: 2 }}
          onClick={sendToVenta}
          variant="contained"
        >
          Realizar una Venta
        </Button>

        <Button
          sx={{ float: "left" ,marginRight: 2 }}
          onClick={sendToRegister}
          variant="contained"
        >
          Gestión de cliente
        </Button>
        <Button
          sx={{float: "left", marginRight: 2 }}
          onClick={sendToStock}
          variant="contained"
        >
          Administrar stock
        </Button>
        <Button
          sx={{float: "left", marginRight: 2 }}
          onClick={sendToData}
          variant="contained"
        >
          Mis Datos
        </Button>
      </div>
    </div>
  );
};

export default homeadmin;
