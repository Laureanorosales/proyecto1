import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("api/login", user);
      setUser({
        username: "",
        password: "",
      });
      toast.success("Bienvenido!");
      setOpen(false);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message)
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
      <Button sx={{ color: "#fff" }} onClick={handleOpen}>
        LOGIN
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Login
            </Typography>
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
              sx={{ width: "100%", marginBottom: "30px" }}
              variant="filled"
              label="contraseña"
              type="password"
              id="password"
              value={user.password}
              name="password"
              onChange={handleChange}
            />
            <Button sx={{ float: "right" }} variant="contained" type="submit">
              Entrar
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
