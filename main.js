"use strict";
console.log("Running webapp...");

let Express = require('express');
let app = new Express();
let port = process.env.PORT || 80;
app.use(require('body-parser').urlencoded());
app.use(require('body-parser').json());

app.use(Express.static('./app'));
app.get('/messages',(req,res)=>{
	res.status(200).json(require('./messages.json'))
})
app.listen(port,()=>{
	//console.log(`Running webhook listener...`);
	console.log(`App listening on port ${port}`);
}) ;

require("./webhook.js")(app);