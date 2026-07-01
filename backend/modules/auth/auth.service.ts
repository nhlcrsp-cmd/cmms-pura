import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import prisma from "../../lib/prisma";

interface LoginDTO {
  usuario: string;
  password: string;
}

class AuthService {
  async login({ usuario, password }: LoginDTO) {
    const user = await prisma.usuario.findUnique({
      where: { usuario },
      include: {
        rol: true,
      },
    });

    if (!user) {
      throw new Error("Usuario o contraseña incorrectos.");
    }

    const passwordValida = await bcrypt.compare(password, user.password);

    if (!passwordValida) {
      throw new Error("Usuario o contraseña incorrectos.");
    }

    const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRET no está configurado");
}

const options: SignOptions = {
  expiresIn: "8h",
};

const token = jwt.sign(
  {
    id: user.id,
    rol: user.rol.nombre,
  },
  secret,
  options
);

    return {
      token,
      usuario: {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        usuario: user.usuario,
        rol: user.rol.nombre,
      },
    };
  }
}

export default new AuthService();