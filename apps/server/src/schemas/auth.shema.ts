import { z } from "zod";


export const loginSchema = z.object({
  body: z.object({
    email: z.string().nonempty("Email is required").email({
      message: "Write a correct email",
    }),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password too short"),
  }),
});

export const RegisterSchema = z.object({
  body: z.object({
    email: z.string().nonempty("Email is required").trim().email({
      message: "Write a correct email",
    }),
    password: z
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
  }),
});