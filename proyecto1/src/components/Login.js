import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

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
  return (
    <div>
      <Button sx={{color:'#fff'}} onClick={handleOpen}>LOGIN</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
            <TextField sx={{width:'100%', marginBottom:'10px', marginTop:'20px'}} variant='filled' label='usuario'/>
            <TextField sx={{width:'100%', marginBottom:'30px'}} variant='filled' label='contraseña' type='password'/>
            <Button sx={{float:'right'}} variant="contained" type='submit'>Entrar</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
