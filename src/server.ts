import express,{json} from 'express'
import router from './routes/productRoutes'
import ProductRouter from './routes/productRoutes'




const app = express()

//middlewares
app.use(json())
app.use("/Product", ProductRouter)



app.listen(4000, ()=>{ console.log("Server Running..")})