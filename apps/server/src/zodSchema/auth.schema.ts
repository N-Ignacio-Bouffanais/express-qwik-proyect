import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("Email is required").email({
    message: "Write a correct email",
  }),
  hash: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password too short"),
});

export const jwtPayloadSchema = z.object({
  id: z.string().cuid(),
});


export type LoginSchema = z.infer<typeof loginSchema>;
export type JwtPayloadSchema = z.infer<typeof jwtPayloadSchema>;
