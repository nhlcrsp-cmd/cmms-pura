"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = __importDefault(require("../../prisma/client"));
class AuthService {
    async login({ usuario, password }) {
        const user = await client_1.default.usuario.findUnique({
            where: { usuario },
            include: {
                rol: true,
            },
        });
        if (!user) {
            throw new Error("Usuario o contraseña incorrectos.");
        }
        const passwordValida = await bcrypt_1.default.compare(password, user.password);
        if (!passwordValida) {
            throw new Error("Usuario o contraseña incorrectos.");
        }
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET no está configurado");
        }
        const options = {
            expiresIn: "8h",
        };
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            rol: user.rol.nombre,
        }, secret, options);
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
exports.default = new AuthService();
