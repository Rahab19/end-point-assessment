import { Router } from "express"
import{ addProduct, searchProduct, searchProducts } from "../controllers/productControllers"

const ProductRouter =  Router()

ProductRouter.post("",addProduct)
ProductRouter.get("/allProducts",searchProducts)
 ProductRouter.get("/:id",searchProduct)



export default ProductRouter