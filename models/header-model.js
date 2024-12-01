const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema({
  page: { type: String },
  tagdata: { type: String },
  status: { type: Boolean, default: true },
});

const Header = mongoose.model("Header", headerSchema);

module.exports = Header;
