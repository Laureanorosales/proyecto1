import httpError from "@/helpers/httpError";

const { default: medicamentos } = require("@/models/medicamentos");
const { dbConnect } = require("@/utils/mongoose");
dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const { NombreMed, LaboratorioDes, Stock, Valor } = req.body;
        const medic = { NombreMed, LaboratorioDes, Stock, Valor };
        const newMedic = await medicamentos.create(medic);
        res.status(200).send({ newMedic });
      } catch (err) {
        res.status(err?.status || 500).send({ message: err.message });
      }
      break;
    case "GET":
      try {
        const { NombreMed, LaboratorioDes, Stock, Valor } = req.body;
        console.log("medic", req.body);
        const medic = await medicamentos
          .findOne({ NombreMed })
          .select("NombreMed");
        if (!medic) {
          throw new httpError(404, `Medicamento no encontrado`);
        }
        res.status(200).send(medic);
      } catch (err) {
        res.status(err?.status || 500).send({ message: err.message });
      }
      break;
    default:
      return res.status(404);
  }
};