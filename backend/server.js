const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT=process.env.PORT || 4000;
let corsOptions = {
  origin: 'http://localhost:4000/' 
};
const routeURL = require('./Routes/route')
const cors = require('cors');
dotenv.config()

mongoose.connect(process.env.ACCESS, () => console.log('database connected') )
app.disable("x-powered-by");
app.use(express.json())
//app.use(cookieParser()) 
app.use(cors());
app.use('/app',routeURL)
app.listen(PORT,console.log(`Server open at  ${PORT}`));
// app.listen(4000,() => console.log('server is open'))