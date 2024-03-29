import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UserRepository";

class UserController {


   async create(req: Request, res: Response){
      const {name, email} = req.body;

      
      const usersRepository = getCustomRepository(UsersRepository)

      // SELECT * FROM USERS WHERE EMAIL = "EMAIL"
      const usersAlreadyExists = await usersRepository.findOne({
         email
      })

      if(usersAlreadyExists){
         return res.status(400).json({error: "User already exists"})
      }

      const user = usersRepository.create({
         name,email
      })

      await usersRepository.save(user);


      return res.status(201).json(user)
   }
}

export default UserController