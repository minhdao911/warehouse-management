const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sparePartSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  location: String,
  container_number: Number,
  additional_info: String,
  amount: Number
});

module.exports = mongoose.model("SparePart", sparePartSchema);