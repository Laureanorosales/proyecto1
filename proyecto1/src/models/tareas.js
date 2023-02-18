import { Schema, model, models, mongoose } from "mongoose";

const tareasSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  isDone: {
    type: Boolean,
  },
});
export default models.Tareas || model("Tareas", tareasSchema)