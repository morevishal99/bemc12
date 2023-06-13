
const express = require("express")
const { JobModel } = require("../model/jobpost")

const jobRoute = express.Router()
jobRoute.get("/", async (req, res) => {
    const { role,language } = req.query
    console.log('language: ', language);
    console.log('role: ', role);
    if (role) {

        const jobdata = await JobModel.find({ role: role })
        res.send(jobdata)
    }
    
     else {
        const jobdata = await JobModel.find()
        console.log('role: ', role);
        res.send(jobdata)
    }
})

jobRoute.post("/addjob", async (req, res) => {
    // console.log(req.body)


    // res.send(req.body)
    try {
        const jobdata = new JobModel(req.body)
        await jobdata.save()
        res.send({ "msg": "job posted Successfully" })
    } catch (error) {
        res.send({ "msg": error })
    }

})
module.exports = { jobRoute }