import { pool } from '../../db_connecction.js';
// Obtener todas las Ventas 
export const obtenerVentas = async (req, res) => { //async es para hacer multiples tareas a la vez 
  try {
    const [result] = await pool.query('SELECT * FROM Ventas'); // pool.query es para hacer una consuta con la bd
    res.json(result);
  } catch (error) {
    return res.status(500).json({ // status (500) es un error en el servidor
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};