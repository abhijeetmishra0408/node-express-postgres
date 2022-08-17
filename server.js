const express = require('express');
const studentsRoutes = require('./src/students/routes');
const loginRoutes = require('./src/login/routes');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!!')
});

app.use('/api/v1/', loginRoutes);
app.use('/api/v1/students', studentsRoutes);



app.listen(port, () => console.log('app is listning on ' + port));