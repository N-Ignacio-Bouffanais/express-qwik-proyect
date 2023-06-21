import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("El correo es  requerido").email({
    message: "Ingrese un correo valido",
  }),
  hash: z
    .string()
    .nonempty("La contraseña es requerida")
    .min(6, "Contraseña demasiado corta"),
});

export const jwtPayloadSchema = z.object({
  id: z.string().cuid(),
});


export type LoginSchema = z.infer<typeof loginSchema>;
export type JwtPayloadSchema = z.infer<typeof jwtPayloadSchema>;
