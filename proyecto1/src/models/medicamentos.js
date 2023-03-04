import { Schema, model, models, mongoose } from "mongoose";

const medicamentosSchema = new Schema({
  NombreMed: {
    type: String,
  },
  LaboratorioDes: {
    type: String,
  },
  Stock: {
    type: Number,
  },
  Valor: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
  },
});
export default models.Medicamentos || model("Medicamentos", medicamentosSchema);
