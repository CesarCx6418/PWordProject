import  express  from "express";
import indexRoutes from './routes/index.routes.js'
import phraseRoutes from './routes/phrase.routes.js'

const app = express()
//escucha el puerto 3000

app.use(express.json())
app.use(indexRoutes)
app.use('/api/',phraseRoutes)

//PARA EL NOT FOUND
app.use((req, res, next) => {
    res.status(404).json({
        message:'Not Found :('
    })
})

export default app;