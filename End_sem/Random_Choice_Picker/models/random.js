const mongoose = require("mongoose")

const randomSchema = mongoose.Schema({
	text: {
       type: "String"
    },
})

module.exports = mongoose.model("random", randomSchema)