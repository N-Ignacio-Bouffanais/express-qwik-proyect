import { z } from "zod";

export const userCreate = z.object({
  email: z.string().nonempty("Email is required").trim().email({
    message: "Write a correct email",
  }),
  hash: z
    .string()
    .trim()
    .nonempty("Password is required")
    .min(6, "Password too short"),
  FirstName: z
    .string()
    .trim()
    .nonempty("First Name is required")
    .min(3, "First Name is too short"),
  LastName: z
    .string()
    .trim()
    .nonempty("Last Name is required")
    .min(3, "Last Name is too short"),
});

export const userUpdate = z.object({
  email: z.string().nonempty("Email is required").trim().email({
    message: "Write a correct email",
  }),
  hash: z
    .string()
    .trim()
    .nonempty("Password is required")
    .min(6, "Password too short"),
  FirstName: z
    .string()
    .trim()
    .nonempty("First Name is required")
    .min(3, "First Name is too short"),
  LastName: z
    .string()
    .trim()
    .nonempty("Last Name is required")
    .min(3, "Last Name is too short"),
});

export const userReturn = userUpdate.omit({ hash: true });

export type UserCreate = z.infer<typeof userCreate>;
export type UserUpdate = z.infer<typeof userUpdate>;
export type UserReturn = z.infer<typeof userReturn>;
