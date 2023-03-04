import usuario from "@/models/usuario";
import { dbConnect } from "@/utils/mongoose";
import httpError from "@/helpers/httpError";
dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const { username, password, role, email, tel } = req.body;
        const user = { username, password, role, email, tel };
        const newUser = await usuario.create(user);
        res.status(200).send({ newUser });
      } catch (err) {
        res.status(err?.status || 500).send({ message: err.message });
      }
    case "PUT":
      try {
        const { username } = req.body;
        const userEnc = await usuario.findOne({ username });
        if (!userEnc) {
          throw new httpError(404, `Usuario no encontrado`);
        }
        await usuario.updateOne({ username }, { active: false });
        res.status(200).send({ message: "success" });
      } catch (err) {
        res.status(err?.status || 500).send({ message: err.message });
      }
      break;
    default:
      return res.status(404);
  }
};
