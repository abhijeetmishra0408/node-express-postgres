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
    // const id = parseInt(req.params.id);
    // console.log(req.body)
    // const req_body = req.body;
    // q = ''
    // if (req_body.email.length) {
    //     pool.query(queries.checkEmailExist, [req_body.email], (error, results) => {
    //         if (error) {
    //             throw error;
    //         }
    //     });
    //     if (req_body.name) q = 'name = ' + "'" + req_body.name + "'";
    //     if (req_body.email.length) q = q + ',email = ' + "'" + req_body.email + "'";
    //     if (toString(req_body.age).length) q = q + ', age = ' + req_body.age;
    //     if (req_body.dob.length) q = q + ', dob=' + "'" + req_body.dob + "'";
    //     if (q.length) {

    //         pool.query(queries.editStudents, [q, id], (error, results) => {
    //             console.log('=======' + queries.editStudents + q)
    //             if (error) {
    //                 throw error;
    //             } else {
    //                 res.status(200).send('students details updated');
    //             }
    //         });
    //     }
    // }
}


module.exports = {
    getStudents,
    getStudentsByID,
    addStudents,
    removeStudent,
    editStudent,
};