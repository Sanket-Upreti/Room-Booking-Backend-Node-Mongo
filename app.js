const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./db/connect')
const registerRoute = require('./routes/register.js')
const teamRoute = require('./routes/team.js')
const loginRoute = require('./routes/login.js')
const bookRoomRoute = require('./routes/bookRoom.js')
const announcementRoute = require('./routes/announcement.js')
const cookieParser = require('cookie-parser')

require('dotenv').config()

app.use(express.urlencoded({extended: false}))

app.use(express.json())
app.use(cors())
app.use(cookieParser(process.env.JWT_HIDDEN))

app.get('/', (req, res)=>{
    res.send("hello world!")
})
app.use('/register', registerRoute)
app.use('/team', teamRoute)
app.use('/login', loginRoute)
app.use('/room', bookRoomRoute)
app.use('/announcement', announcementRoute)

const start = async()=>{
    try{
        await connectDB(process.env.CONNECTION_STRING)
        app.listen(5000, ()=>{
            console.log("on your port 5000");
        })
    }catch(err){
        console.log("---Error found----", err);
    }
}

start()