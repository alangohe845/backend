const mongoose = require("mongoose");

const medicionesSchema= new mongoose.Schema({
      id: {
        type: String,
      },
      temperature: {
        type: Number,
      },
      humidity: {
        type: Number,
      },
});

module.exports = mongoose.model("mediciones", medicionesSchema);