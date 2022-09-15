import { Response } from "express";
import  mssql  from "mssql";
import { sqlConfig } from "../Config/Config";
import { parcelCustom } from "../Interfaces/parcelCustom";









export const addParcel = async(req:parcelCustom,res:Response)=>{
    try {

        const {
            senderemail,
            receiveremail,
            fromLoc,
            parcel_desc,
            toLoc,
            status,
            weight,
            price,
            
        
        } = req.body
        // console.log(req.body);
        

        const pool = await mssql.connect(sqlConfig)
        await pool.request()
        .input('senderemail',mssql.VarChar,senderemail)
        .input('receiveremail',mssql.VarChar,receiveremail)
        .input('parcel_desc',mssql.VarChar,parcel_desc)
        .input('fromLoc',mssql.VarChar,fromLoc)
        .input('toLoc',mssql.VarChar,toLoc)
        .input('status',mssql.VarChar,status)
        .input('weight',mssql.Int,weight)
        .input('price',mssql.Int,price)
        .execute('addParcel')

        return res.status(201).json({
            message:'parcel added successfully...'

        })
        
    } catch (error) {
        return res.status(401).json({
            message:error

        })
        
    }
}
export const getAllParcels = async(req:parcelCustom,res:Response)=>{
    try {

        const pool = await mssql.connect(sqlConfig)
        if(pool.connected){
            console.log("connected succesfully....");
            
        }

        const results = await (await pool.request().execute('getAllParcels')).recordset
        if(results.length == 0){
            return res.status(406).send({
                message:"no entries found...."
            })
        }
        return res.status(201).json(
            results
        )
        
    } catch (error) {

        // console.log(error);
        return res.status(401).send({
            message:error
        })
        
        
    }
}
export const deleteParcel = async(req:parcelCustom,res:Response)=>{
    try {
 
        const parcel_id = req.params.parcel_id

        const pool = await mssql.connect(sqlConfig)
        if(pool.connected){
            console.log("Connected successfully");
            
        }
        await pool.request()
        .input("parcel_id",mssql.Int,parcel_id)
        .execute("deleteParcel")

        return res.json({
            message:"parcel deleted successfully..."
        })
        
        
    } catch (error) {
        console.log(error);
        

        return res.json({
            message:"project does not exist..."
        })
        // return res.json({
        //     message:error
        // })
        
    }
}