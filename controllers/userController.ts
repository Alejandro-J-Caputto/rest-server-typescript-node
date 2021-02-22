import { Request, Response } from "express";
import User from "../models/user";


export const getUsers = async (req: Request, res: Response) => {



  const users = await User.findAll();

  res.status(200).json({
    msg: 'getUsers',
    users
  })

}

export const getUser = async (req: Request, res: Response) => {

  const {id} = req.params;

  const user = await User.findByPk(id);

  if(!user) {
    res.status(404).json({
      status: 'fail',
      message: 'This id doesnt match any user on DB'
    })
  }

  res.status(200).json({
    msg: 'getUser',
    user
  })

}
export const postUser = async (req: Request, res: Response) => {

  const {body} = req;
  try{
    const createUser = new User(body);
    await createUser.save();

  } catch(err) {
    console.log(err)
    res.status(500).json({err})
  }
  res.status(200).json({
    msg: 'postUser',
    body
  })

}
export const putUser = async (req: Request, res: Response) => {



  const {id} = req.params;
  const {body} = req;
  

  const editUser = await User.findByPk(id);

  if(!editUser) throw new Error('There is not an user with the provided ID')
  
  editUser?.update(body)


  res.status(200).json({
    msg: 'putUser',
    editUser
  })

}
export const deleteUser = async (req: Request, res: Response) => {

  const {id} = req.params;

  const deleteUser = await User.findByPk(id);

  deleteUser?.update({active: false})

  res.status(200).json({
    msg: 'deleteUser',
    deleteUser
  })

}