const express = require('express');
const conn = require('./conn');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index');
});

app.post('/resgister', (req,res)=>{

    const ln = req.body.ln;
    const fn = req.body.fn;
    const age = req.body.age;
    const add = req.body.add;

    const insert = `INSERT INTO tbl_students VALUES('0','${ln}','${fn}','${age}','${add}')`

    conn.query(insert, (err)=>{
        if(err) throw err;
        res.send(
            <script>
                alert('Data Inseted');
                location.href='/';
            </script>
        )
    })


    console.log(ln);
});

app.listen(8000);