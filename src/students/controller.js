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


const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.removeStudent, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.status(400).send('No student found');
        }
        if (error) {
            throw error;
        } else {
            res.status(200).send('Student removed success.');
        }

    });
};


const editStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const req_body = req.body;
    var email = null;
    var name = null;
    var age = null;
    var db = null;
    if (req_body.email) email = req_body.email;
    if (req_body.name) name = req_body.name;
    if (req_body.age) age = req_body.age;
    if (req_body.dob) dob = req_body.dob;

    pool.query(queries.editStudents, [id, name, email, age, dob], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.status(200).send({ message: 'student details updated', data: results.rows });
        }
    });
}

const searchStudent = (req, res) => {
    const searchText = req.query.name;
    pool.query(queries.searchStudent, ['%' + searchText + '%'], (error, results) => {
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getStudents,
    getStudentsByID,
    addStudents,
    removeStudent,
    editStudent,
    searchStudent,
};