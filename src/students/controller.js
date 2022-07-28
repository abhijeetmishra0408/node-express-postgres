const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const getStudentsByID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsByID, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getStudents,
    getStudentsByID,
};