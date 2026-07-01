import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Crear rol Administrador si no existe
  const adminRole = await prisma.rol.upsert({
    where: { nombre: "Administrador" },
    update: {},
    create: {
      nombre: "Administrador",
      descripcion: "Acceso total al sistema",
    },
  });

  // Verificar si ya existe el usuario admin
  const existe = await prisma.usuario.findUnique({
    where: { usuario: "admin" },
  });

  if (!existe) {
    const password = await bcrypt.hash("admin123", 10);

    await prisma.usuario.create({
      data: {
        nombre: "Administrador",
        apellido: "Sistema",
        usuario: "admin",
        email: "admin@cmms.local",
        password,
        rolId: adminRole.id,
      },
    });

    console.log("✅ Usuario administrador creado.");
  } else {
    console.log("ℹ️ El usuario administrador ya existe.");
  }
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });