const express = require('express');

const app = express();


require('./DB/conn.js');



app.use(require('./router/auth'));

app.listen(80,()=>{
    console.log(`server is running on port 80`);
})