const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    smallJob: {
        type: String,
    }
})
module.exports = mongoose.connect("Interior", interiorSchema)