import {Request, Response} from "express"

class UserController {


   async create(req: Request, res: Response){

      console.log(req.body)
      return res.json(req.body)
   }
}

export default UserController