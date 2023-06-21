import { z } from "zod";

export const userCreate = z.object({
  email: z.string().nonempty("El correo es requerido").trim().email({
    message: "Ingrese un correo valido",
  }),
  hash: z
    .string()
    .trim()
    .nonempty("Contraseña no puede estar en blanco")
    .min(6, "Contraseña demasiado corta"),
  FirstName: z
    .string()
    .trim()
    .nonempty("Nombre de usuario no puede estar en blanco")
    .min(3, "Nombre de usuario demasiado corto"),
  LastName: z
    .string()
    .trim()
    .nonempty("Apellido no puede estar en blanco")
    .min(3, "Apellido demasiado corto"),
});

export const userUpdate = z.object({
  email: z.string().nonempty("Email is required").trim().email({
    message: "Ingrese un correo valido",
  }),
  hash: z
    .string()
    .trim()
    .nonempty("Contraseña no puede estar en blanco")
    .min(6, "Contraseña demasiado corta"),
  FirstName: z
    .string()
    .trim()
    .nonempty("Nombre de usuario no puede estar en blanco")
    .min(3, "Nombre de usuario demasiado corto"),
  LastName: z
    .string()
    .trim()
    .nonempty("Apellido no puede estar en blanco")
    .min(3, "Apellido demasiado corto"),
});

export const userReturn = userUpdate.omit({ hash: true });

export type UserCreate = z.infer<typeof userCreate>;
export type UserUpdate = z.infer<typeof userUpdate>;
export type UserReturn = z.infer<typeof userReturn>;
