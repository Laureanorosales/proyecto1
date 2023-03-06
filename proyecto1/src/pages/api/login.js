import usuario from "@/models/usuario";
import { dbConnect } from "@/utils/mongoose";
dbConnect();
import httpError from "@/helpers/httpError";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const { username, password } = req.body;
        const user = await usuario
          .findOne({ username })
          .select(
            " username password role active email edad dom nombre  "
          );
        if (!user) {
          throw new httpError(404, `Usuario no encontrado`);
        }
        if (!user.active) {
          throw new httpError(404, "Usuario dado de baja");
        }
        if (password != user.password) {
          throw new httpError(404, `Contraseña incorrecta`);
        }
        user.set("password", undefined, { strict: false });
        res.status(200).send(user);
      } catch (err) {
        res.status(err?.status || 500).send({ message: err.message });
      }
      break;
    default:
      return res.status(404);
  }
};
