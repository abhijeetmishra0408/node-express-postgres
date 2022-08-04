const getStudents = "select * from students";
const getStudentsByID = "select * from students where id = $1";
const checkEmailExist = "select 1 from students where email = $1";
const addStudents = 'Insert into students (name, email, age, dob) VALUES ($1, $2, $3, $4)';
const removeStudent = 'delete from students where id = $1';
const editStudents = 'update students set name = COALESCE($2 , name), email = COALESCE($3 , email), age = COALESCE($4, AGE), dob = COALESCE($5, dob) where id = $1 RETURNING *';
module.exports = {
    getStudents,
    getStudentsByID,
    checkEmailExist,
    addStudents,
    removeStudent,
    editStudents,
};