import express,{json} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import Router from './routes/routes.js'
import dbConnection from './database/db.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/',Router)
dotenv.config()

const PORT = process.env.PORT;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
dbConnection(username,password)


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})



