import { pool } from '../../db_connecction.js';
// Obtener todos los Detalles_Compras 
export const obtenerDetallesCompras = async (req, res) => { //async es para hacer multiples tareas a la vez 
  try {
    const [result] = await pool.query('SELECT * FROM Detalles_Compras'); // pool.query es para hacer una consuta con la bd
    res.json(result);
  } catch (error) {
    return res.status(500).json({ // status (500) es un error en el servidor
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};