import { Response, Request } from "express";
import { createUser, getUser, getUsers, deleteUser, updateUser } from "services/users";


const getItems = async (req: Request, res: Response) => {
    const body = req.body;
  try {
    const items = await getUsers();
    return res.send({ data: items, user: body.user });
  } catch (e) {
    res.json(e);
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await createUser(req.body);
    res.send(responseItem);
  } catch (e) {
    res.json(e);
  }
};

const getItem = async (req: Request, res: Response) => {
  try {
    const response = await getUser(req.params.id);
    const data = response ? response : "Not Found";
    res.send(data);
  } catch (e) {
    res.json(e);
  }
};

const putItem = async (req: Request, res: Response) => {
  try {
    const response = await updateUser(req.params.id, req.body);
    res.send(response);
  } catch (e) {
    res.json(e);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const response = await deleteUser(req.params.id);
    res.send(response);
  } catch (e) {
    res.json(e);
  }
};

export { getItems, postItem, getItem, putItem, deleteItem };