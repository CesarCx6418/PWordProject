import { createPool } from "mysql2/promise";
//CRATE POOL PARA REAUTILIZAR VARIAS LINEAS DE CONEXIONES
import{
    DB_HOST,
    DB_DATABASE,
    DB_PORT,
    DB_USER,
    DB_PASSWORD
} from './config.js'

//espera parametros acerca de la bd
export const pool = createPool({
 host: DB_HOST,
 user: DB_USER,
 password: DB_PASSWORD,
 port: DB_PORT,
 database:DB_DATABASE
})
//tiene varias funciones como pool.query para hacer consultas exc
