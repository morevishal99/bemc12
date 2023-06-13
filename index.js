const express = require("express")
const {connection}=require("./connection")
const { jobRoute } = require("./Routes/jobroute")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.use("/job",jobRoute)
app.listen(8080, async() => {
    try {
        await connection
        console.log("connected to db server running on port 8080")

    } catch(err) {
        console.log(err)
    }
})