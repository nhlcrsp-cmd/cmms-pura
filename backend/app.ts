import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    nombre: "CMMS Pura",
    version: "0.2.0",
    estado: "API funcionando correctamente"
  });
});
app.use("/api/auth", authRoutes);

export default app;