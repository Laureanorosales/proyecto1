import React, {useState} from "react";
import Navbar from "@/components/Navbar";
//@mui
import { TextField } from "@mui/material";
const register = () => {

  const [user, setUser] = useState({
    username:'',
    password:'',
    role:'',
    tel:'',
    email:'',
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const usuario = await axios.post("api/user", user);
      setUser({
        username: "",
        password: "",
      });

      toast.success("Bienvenido!");

    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div>
        <p>Alta de cliente</p>
        <p>Ingrese:</p>
      </div>
      <di>
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
          label="usuario"
          id="username"
          value={user.username}
          name="username"
          onChange={handleChange}
        />        <TextField
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
          label="usuario"
          id="username"
          value={user.username}
          name="username"
          onChange={handleChange}
        />
      </di>
    </div>
  );
};

export default register;
