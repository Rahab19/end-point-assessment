import {Request,Response} from 'express'
import {v4 as uid} from 'uuid'
import mssql from "mssql"
import { sqlConfig } from '../config'
import {Product,ProductRequest} from"../models/productModels"

export const addProduct=async(req:ProductRequest, res:Response)=>{
    try{
        const id =uid()
        const {name, description, price}= req.body

        //connecting to DB
        let pool= await mssql.connect(sqlConfig)

        //make a request to the db
        await pool.request()
        .input("id", id)
        .input("name", name)
        .input("description",description)
        .input("price", price)
        .execute('addProduct')

        return res.status(201).json({message:"Product added successfuly!!"})


    }catch(error:any){

        res.status(500).json(error.message)

    }
}

export const searchProducts= async (req:Request, res:Response) =>{
    try{
        let pool= await mssql.connect(sqlConfig)
        const product=(await pool.request()
        .execute('searchProducts')).recordset as Product[]


        return res.status(200).json(product)
    }catch(error){
        res.status(500).json(error)

    }
}

export const searchProduct= async (req:Request<{id:string}>, res:Response) =>{
    try{
        let pool= await mssql.connect(sqlConfig)
        const product = (await pool.request()
       .input('id',req.params.id)
       .execute('searchProduct')).recordset[0] as Product

       if(product && product.id){
        return res.status(200).json(product)
       }
       return res.status(404).json({message:'Product not found!'})
        
       return res.status(200).json(product)
    }catch(error){
        res.status(500).json(error)

    }
}
