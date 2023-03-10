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
        const { search } = req.query;
        if (!search) {
          const medic = await medicamentos
            .find({})
            .select("NombreMed LaboratorioDes Valor Stock active");
          if (!medic) {
            throw new httpError(404, `Medicamento no encontrado`);
          }
          res.status(200).send(medic);
        }
        if (search) {
          const medic = await medicamentos
            .find({ NombreMed: { $regex: new RegExp(search) } })
            .select("NombreMed LaboratorioDes Valor");
          if (!medic) {
            throw new httpError(404, `Medicamento no encontrado`);
          }
          res.status(200).send(medic);
        }
      } catch (err) {
        res.status(err?.status || 500).send({ message: err.message });
      }
    case "PUT":
      try {
        const { NombreMed, create, Stock } = req.body;
        if (!create) {
          const medEnc = await medicamentos.findOne({ NombreMed });
          if (!medEnc) {
            throw new httpError(404, `Medicamento no encontrado`);
          }
          await medicamentos.updateOne({ NombreMed }, { active: false });
          res.status(200).send({ message: "success" });
        }
        if (create) {
          const medEnc = await medicamentos
            .findOne({ NombreMed })
            .select("Stock");
          if (!medEnc) {
            throw new httpError(404, `Medicamento no encontrado`);
          }
          await medicamentos.updateOne(
            { NombreMed },
            { Stock: medEnc.Stock - Stock }
          );
          res.status(200).send({ message: "success" });
        }
      } catch (err) {
        res.status(err?.status || 500).send({ message: err.message });
      }
      break;
    default:
      return res.status(404);
  }
};
