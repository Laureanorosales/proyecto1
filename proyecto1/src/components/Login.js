import React from "react";
//@mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
//react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//proptypes
import propTypes from "prop-types";
//axios
import axios from "axios";
//next
import { useRouter } from "next/router";



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

const Login = (props) => {
  const { isLogged, setIsLogged } = props;
  const router = useRouter()
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();
  const [logged, setLogged] = React.useState()
  const [userData, setUserData] = React.useState()
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
      const usuario = await axios.post("api/login", user);
      setData(usuario);
      setUser({
        username: "",
        password: "",
      });
      setIsLogged(true);
      localStorage.setItem("user", JSON.stringify(usuario.data));
      localStorage.setItem("isLogged", true);
      toast.success("Bienvenido!");
      setOpen(false);
      if(usuario.data.role === 'user'){
        router.push('/homeuser')
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
      localStorage.setItem("user", null);
      localStorage.setItem("isLogged", false);
    }
  };
  

React.useEffect(()=>{
const loginUser = localStorage.getItem('isLogged')
setLogged(loginUser)
const user = localStorage.getItem('user')
setUserData(user?.trim())
},[isLogged])


const userInfo = JSON.parse(userData ? userData: null)
  return (
    <div>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
      {logged ? (
        <Button sx={{ color: "#fff" }}>{userInfo?.username}</Button>
      ) : (
        <Button sx={{ color: "#fff" }} onClick={handleOpen}>
          Login
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {isLogged ? data?.data?.username : "Login"}
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
Login.propTypes = {
  isLogged: propTypes.bool,
  setIsLogged: propTypes.func,
};

export default Login;
