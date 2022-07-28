const getStudents = "select * from students";
const getStudentsByID = "select * from students where id = $1";
const checkEmailExist = "select 1 from students where email = $1";
const addStudents = 'Insert into students (name, email, age, dob) VALUES ($1, $2, $3, $4)';
module.exports = {
    getStudents,
    getStudentsByID,
    checkEmailExist,
    addStudents,
};