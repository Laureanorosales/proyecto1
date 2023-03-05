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
    type: "number",
  },
  email: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
  edad: {
    type: "number"
  },
  dom: {
    type: String
  }
});

export default models.Usuario || model("Usuario", usuarioSchema);
