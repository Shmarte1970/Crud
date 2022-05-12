const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const res = require('express/lib/response');

const app = express();
app.set(`port`, 4000);

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    passwrod: '',
    port: 3306,
    database: 'crudnodejs'
}));

app.listen(app.get('port'), () => {
    console.log('listening on port ', app.get('port'));
});
app.get('/', (req, res) => {
    res.render('home');
})