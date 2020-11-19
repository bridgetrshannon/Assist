const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const opportunitySchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  opportunityDate: { type: Date, required: true },
  phone: { type: Integer, required: true },
  ein: { type: Integer, required: true },
  date: { type: Date, default: Date.now }
});

const Opportunity = mongoose.model("Opportunity", opportunitySchema);

module.exports = Opportunity;