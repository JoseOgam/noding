const express = require("express")
const cors = require("cors")

const app = express()
const port = 5001

app.listen(port, ()=>{
    console.log(`server is running at port ${port}...`)
})
