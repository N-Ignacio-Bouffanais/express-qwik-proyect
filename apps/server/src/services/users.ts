import { Response, Request } from "express";
import { prisma } from "db";
import { RegisterSchema } from "schemas/auth.shema";

const createUser = async () => {
  const user = await prisma.user.create();
};

const getUsers = async () => {}

const getUser = async () => {};

const updateUser = async () => {};

const deleteUser = async () => {};


export { createUser, getUsers, getUser, updateUser, deleteUser };