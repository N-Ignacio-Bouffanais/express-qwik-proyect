import { prisma } from "../db/client";
import { User } from "@prisma/client";
import * as argon2 from "argon2";

const createUser = async ({email, hash, LastName, FirstName}: User) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (user) return "El usuario ya existe";

    const hashedPassword = await argon2.hash(hash);
    return await prisma.user.create({
      data:{
        email:email,
        hash: hashedPassword,
        FirstName: FirstName,
        LastName: LastName,
      }
      
    })
  } catch (e) {
    
  }
};

const getUsers = async () => {}

const getUser = async () => {};

const updateUser = async () => {};

const deleteUser = async () => {};


export { createUser, getUsers, getUser, updateUser, deleteUser };