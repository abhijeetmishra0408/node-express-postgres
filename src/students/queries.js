const getStudents = "select * from students";
const getStudentsByID = "select * from students where id = $1";

module.exports = {
    getStudents,
    getStudentsByID,
};