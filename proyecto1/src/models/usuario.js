import { Schema, model, models, mongoose } from "mongoose";
const usuarioSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "user name must be unique"],
    minlength: [3, "user name must have at least 3 characters"],
    maxlength: [99, "user name must be shorter than 99 characters"],
  },
  password: {
    type: String,
    required: [true, "password is mandatory"],
    minlength: [6, "password must have at least 6 characters"],
    maxlength: [99, "user name must be shorter than 99 characters"],
    select: false,
  },
  role: {
    type: String,
    required: [true, "role is mandatory"],
  },
  tel: {
    type: Number,
    required: [true, "telefono es requerido"],
    minlength: [8, "Minimo 8 digitos"],
    maxlength: [15, "Maximo 15 digitos"]
  },
  email: {
    type: String,
    required: [true, ""]
  },
  active: {
    type: Boolean,
    default: true,
   
  },
  edad: {
    type: Number,
    required: [true, "Ingrese una edad"],
    minlength:[2, "Minimo 2 digitos"]
  },
  dom: {
    type: String,
    required: [true, "Ingrese un domicilio"]
  },
  nombre: {
    type: String,
    required: ["Ingrese un nombre"],
    minlength:[3, "Ingrese un nombre valido"]
  },
  
});

export default models.Usuario || model("Usuario", usuarioSchema);
