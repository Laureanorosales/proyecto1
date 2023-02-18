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
    minlength: [8, "password must have at least 3 characters"],
    maxlength: [99, "user name must be shorter than 99 characters"],
    select: false,
  },
  tasks: {
    type: [String],
    ref: "Tareas",
  },
});

export default models.Usuario || model('Usuario', usuarioSchema)
