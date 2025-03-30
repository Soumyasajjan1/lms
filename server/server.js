import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

//initialise express
const app = express()

//connect to database
await connectDB()

//middlewares
app.use(cors())

//routes
app.get('/', (req, res)=> res.send("Api working"))
app.post('/clerk', express.json(), clerkWebhooks)


//port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server is runnig on port ${PORT}`)
})