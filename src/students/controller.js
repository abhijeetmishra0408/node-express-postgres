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


const addStudents = (req, res) => {
    const { name, email, age, dob } = req.body;
    pool.query(queries.checkEmailExist, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email Already Exist.");
        } else {
            pool.query(queries.addStudents, [name, email, age, dob], (error, results) => {
                if (error) throw error;
                res.status(200).send('Student Added.')
            });
        }
    });

};

module.exports = {
    getStudents,
    getStudentsByID,
    addStudents,
};