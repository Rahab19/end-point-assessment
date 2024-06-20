import{ Request } from "express"

export interface Product {
    id:string
    name:string
    description:string
    price:number
}

interface addProduct {
    name:string
    description:string
    price:number
}

 
export interface ProductRequest extends Request{
    body:addProduct
}