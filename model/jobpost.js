const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")
const jobSchema = mongoose.Schema(
    {
        company: String,
        postedAt: String,
        city: String,
        location: String,
        role: String,
        level: String,
        contract: String,
        position: String,
        language: [String]
    }
)

const JobModel = mongoose.model("jobdetails", jobSchema)
module.exports = { JobModel }