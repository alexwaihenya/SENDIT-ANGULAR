import { Request, Response } from "express";
import { registerSchema, userLoginSchema } from "../Helpers/userValidator";
import { Data } from "../Interfaces/payload";
import { User, userCustom } from "../Interfaces/userCustom";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mssql from "mssql";
import { sqlConfig } from '../Config/Config'
import Connection from "../DatabaseHelpers/db";

const db = new Connection()




interface Extended extends Request {
    info?: Data
}

export const register = async (req: userCustom, res: Response) => {
    try {

        const { username, email, password } = req.body;
        const { error, value } = registerSchema.validate(req.body)
        const hashedPassword = await bcrypt.hash(password, 10)
        if (error) {
            return res.json({ error: error.details[0].message })
        }
  
        const results = (await db.exec('getOneUser',{email})).recordset
        if(results.length>0){
            return res.status(401).json({
                message: "username or email already taken,try a different..."
            })

        }
        
        db.exec("registerUser",{
            username, 
            email, 
            password:hashedPassword

        })
 
        return res.status(201).json({
            message: "registered successfully..."
        })


    } catch (error) {
        console.log(error);
        
        // return res.status(401).json({
        //     message: "username or email already taken,try a different..."
        // })

    }
}

export const login = async (req: userCustom, res: Response) => {
    try {

        const { email, password } = req.body;


        const { error, value } = userLoginSchema.validate(req.body)
        if (error) {
            return res.json({ error: error.details[0].message })
        }


        const user: User[] = (await db.exec("getUser",{email})).recordset


        if (!user[0]) {
            return res.status(401).json({ message: "user not found" })
        }

        const validPassword = await bcrypt.compare(password, user[0].password)
        if (!validPassword) {
            return res.json({ message: "wrong password" })
        }

        const payLoad = user.map(item => {
            const { password, ...rest } = item
            return rest
        })

        const token = jwt.sign(payLoad[0], process.env.KEY as string, { expiresIn: '2000s' })
        res.status(201).json({
            message: "logged in",
            token
        })

    } catch (error) {
        // console.log(error);

        return res.json({
            message:error

        })

    }
}

export const getHomepage = async (req: Extended, res: Response) => {
    if (req.info) {
        return res.json({ message: `Welcome to the Homepage ${req.info.email}` })
    }
}

export const checkUser = async (req: Extended, res: Response) => {
    if (req.info) {
        res.json({ name: req.info.username, role: req.info.role, email: req.info.email })
    }
}

export const getAllUsers = async(req:userCustom,res:Response)=>{
    try {


        const results = (await db.exec("getAllUsers")).recordset
        return res.status(201).json(results)

       

        
    } catch (error) {

        return res.status(401).send({
            message:error
            
        })
        
    }
}