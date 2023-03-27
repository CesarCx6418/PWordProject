import { pool } from '../db.js'

//----------------------GET--------------------------------
export const getPhrases = async (req, res) => {
try {
    const [rows] = await pool.query('SELECT * FROM phrase')
    res.json(rows)  
} catch (error) {
    return res.status(500).json({
       message:'algo anda mal T_T' 
    })
}

}

//-------------------GET BY ID------------------------------
export const getPhrase = async (req, res) => {
    try {
        console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM phrase where id= ?',[req.params.id])
    if (rows.length <= 0) return res.status(404).json({
        message : 'phrase not found'
    })
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'Eres tu, no yo algo a fallado 500'
        })
    }
    
    }


    //--------------------CREATE-----------------------------
export const createPhrase = async (req, res) => {
    const {title, descript, cover }=req.body
    try {
        const [rows] = await pool.query('INSERT INTO phrase (title,descript,cover) VALUES (?,?,?)',[title, descript,cover])
        res.send({
            id: rows.insertId,
            title,
            descript,
            cover
        })
    } catch (error) {
        return res.status(500).json({
            message :'Algo ha fallado :('
        })
    }
    //extraemos los datos =>

    }
    //--------------------DELETE---------------------------------
export const deletePhrase = async(req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM phrase WHERE id = ?',[req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
          message:'phrase not found'
        })
        res.sendStatus(204)

    } catch (error) {
         return res.status(500).json({
            message:'Algo ha fallado :('
         })
    }

}


    //--------------------UPDATE---------------------------------
export const putPhrase = async(req, res) => {
const {id} = req.params
const {title, descript, cover}= req.body
try {
    const [result] = await pool.query('UPDATE phrase SET title = IFNULL(?, title), descript = IFNULL(?, descript), cover =IFNULL(?, cover) WHERE id = ?', [title,descript,cover,id])
if(result.affectedRows === 0) return res.status(404).json({
    message:'NOT FOUND BRO :('
})
const [rows]= await pool.query('SELECT * FROM phrase WHERE id = ?', [id])
res.json(rows[0])
} catch (error) {
return res.send(500)({
    message:'algo ha fallado :('
})
}

}
