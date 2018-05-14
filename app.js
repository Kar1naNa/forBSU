const express = require('express');
const app = express();
app.use(express.static('public/UI'));
app.listen(3012, ()=>{
    console.log('I am your server')
});