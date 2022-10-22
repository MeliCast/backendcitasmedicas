import  express , {json} from 'express'
import  cors  from "cors"
import morgan from 'morgan'
import { tipoEspecialidadRouter } from "./routers/tipoEspecialidad.Router.js"
import { tipoUsuarioRouter } from "./routers/tipoUsuario.Router.js"
import { reservaRouter } from './routers/reserva.Router.js'
import { medicoRouter  } from './routers/medico.Router.js'





const app = express() 
const PORT  = process.env.PORT  ?? 3001

app.use(morgan('dev'))
app.use(json())
app.use(cors())
app.use(tipoEspecialidadRouter)
app.use(tipoUsuarioRouter)
app.use(reservaRouter)
app.use(medicoRouter)

app.listen(PORT, () =>{
    console.log(`ACTIVADO SERVIDOR" ${PORT}`)
} )
