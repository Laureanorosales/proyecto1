
import usuario from '@/models/usuario';



export default async (req, res) => {
    switch (req.method) {
        case 'POST':
            try {
            const {username,password} = req.body
            const user = {username, password}
            const newUser = await usuario.create(user)
           res.status(200).send({newUser})
        } catch (err) {
          res.status(err?.status || 500).send({ message: err.message });
        }
        break;
      default:
        return res.status(404);
    }
  };