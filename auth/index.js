const express = require("express")
const cors = require("cors")
const bodyParse  = require("body-parser")
require("./db/config")


const app = express()
app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())

const port = 4000

app.listen(port, ()=>{
    console.log(`server is running at port ${port}...`)
})
