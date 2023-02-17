import dotenv from "dotenv";
dotenv.config();
dbConnect();
import tareasSchema from "../../models/tareas";

export default async (req, res) => {
    switch (req.method) {
      case 'GET':
        try {
            res.send({message:"Hola"})
        } catch (err) {
          res.status(err?.status || 500).send({ message: err.message });
        }
        break;
      default:
        return res.status(404);
    }
  };