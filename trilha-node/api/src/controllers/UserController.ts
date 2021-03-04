import {Request, Response} from "express"
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {


   async create(req: Request, res: Response){
      const {name, email} = req.body;

      
      const usersRepository = getRepository(User)

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