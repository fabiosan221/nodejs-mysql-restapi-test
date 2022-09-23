import { query } from 'express';
import { pool } from '../db.js';

//Obtener todos los empleados
export const getEmpleados = async (req,res) => {
    try {
        //throw new Error('DB Error');
        const [rows] = await pool.query('SELECT * FROM empleados');
        res.json(rows);    
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'});
    }
};

//Obtener un empleado mediante id
export const getEmpleado = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [req.params.id]);

        if (rows.length <= 0 ){
            return res.status(404).json({message: 'Empleado no encontrado'})
        }
        else{
            res.json(rows[0]);
        }    
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'});
    }
};

//Crear un empleado
export const createEmpleado = async (req,res) => {
    const {nombre, salario} = req.body;

    try {    
        const [rows] = await pool.query('INSERT INTO empleados (nombre, salario) VALUES (?, ?)', [nombre, salario]);
        res.send({
            id: rows.insertId,
            nombre,
            salario,
        });
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'});
    }
};

//Eliminar un empleado mediante id
export const deleteEmpleado = async (req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM empleados WHERE id = ?', [req.params.id]); 

        if (result.affectedRows <= 0){
            return res.status(404).json({message: 'Empleado no encontrado'})
        }
        else{
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'});
    }
};

//Actualizar un empleado mediante id
export const updateEmpleado = async (req,res) => {
    const {id} = req.params;
    const {nombre, salario} = req.body;
    
    try {
        
        const [result] = await pool.query('UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?', [nombre, salario, id]);

        console.log(result);

        if (result.affectedRows === 0){
            return res.status(404).json({message: 'Empleado no encontrado'});
        }else{
            //res.json('Parametros recibidos');
            const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id]);
            res.json(rows[0]);
        }
    } catch (error) {
        return res.status(500).json({message: 'Algo salió mal'});
    }
};

