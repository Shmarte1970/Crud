const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = requier('express-myconnection');
const bodyParser = requier('body-parser');
const mysql = requier('mysql');

const app = express();
app.set(`port`, 4000);

app.listen(app.get('port'), () => {
    console.log('listening on port ', app.get('port'));
});