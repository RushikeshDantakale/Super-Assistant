const express = require('express');

const app = express();


// require('./DB/conn.js');



app.use(require('./router/auth'));

app.listen(5000,()=>{
    console.log(`server is running on port 5000`);
})