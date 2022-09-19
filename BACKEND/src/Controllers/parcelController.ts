import { Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../Config/Config";
import Connection from "../DatabaseHelpers/db";
import { parcelCustom } from "../Interfaces/parcelCustom";

const db = new Connection()



export const addParcel = async (req: parcelCustom, res: Response) => {
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
        db.exec('INSERTUPDATE', {
            senderemail,
            receiveremail,
            fromLoc,
            parcel_desc,
            toLoc,
            status,
            weight,
            price
        })

        return res.status(201).json({
            message: 'parcel added successfully...'

        })

    } catch (error) {
        return res.status(401).json({
            message: error

        })

    }
}
export const getAllParcels = async (req: parcelCustom, res: Response) => {
    try {

       const results = (await db.exec("getAllParcels")).recordset

        
        return res.status(201).send(
            results
        )

    } catch (error) {

        // console.log(error);
        return res.status(401).send({
            message: error
        })


    }
}
export const deleteParcel = async (req: parcelCustom, res: Response) => {
    try {

        const parcel_id = req.params.parcel_id
        // db.exec("deleteParcel",{
        //     parcel_id 
        // })

        const pool = await mssql.connect(sqlConfig)
        if (pool.connected) {
            console.log("Connected successfully");

        }
        await pool.request()
            .input("parcel_id", mssql.Int, parcel_id)
            .execute("deleteParcel")

        return res.json({
            message: "parcel deleted successfully..."
        })


    } catch (error) {
        console.log(error);


        return res.json({
            message: "project does not exist..."
        })
        // return res.json({
        //     message:error
        // })

    }
}

export const sentParcel = async (req: parcelCustom, res: Response) => {
    try {
        const parcel_id = req.params.parcel_id;
        // db.exec("UPDATEPARCELSENT",{parcel_id})
        const pool = await mssql.connect(sqlConfig)
        if (pool.connected) {
            console.log("Connected successfully");

        }
        await pool.request()
            .input("parcel_id", mssql.Int, parcel_id)
            .execute("UPDATEPARCELSENT")
        return res.json({
            message: "parcel was sent..."
        })

    } catch (error) {
        // console.log(error);

        res.json({
            message: "parcel is already sent..."
        })


    }
}

export const deliverParcel = async (req: parcelCustom, res: Response) => {
    try {
        const parcel_id = req.params.parcel_id;
        const pool = await mssql.connect(sqlConfig)
        if (pool.connected) {
            console.log("Connected successfully");

        }
        await pool.request()
            .input("parcel_id", mssql.Int, parcel_id)
            .execute("UPDATEPARCELDELIVERED")
        return res.json({
            message: "parcel was delivered..."
        })

    } catch (error) {
        // console.log(error);

        res.json({
            message: "parcel is already delivered..."
        })


    }
}
export const updateParcel = async (req: parcelCustom, res: Response) => {
    try {
        const parcel_id = req.params.body

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
        db.exec('updateParcel', {
            parcel_id,
            senderemail,
            receiveremail,
            fromLoc,
            parcel_desc,
            toLoc,
            status,
            weight,
            price
        })

        return res.status(201).json({
            message: 'parcel updated successfully...'

        })

    } catch (error) {
        return res.status(401).json({
            message: error

        })

    }
}