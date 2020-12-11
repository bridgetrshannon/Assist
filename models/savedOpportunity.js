const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedOpportunitySchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  shortDescription: String,
  opportunityDate: { type: Date, required: true },
  phone: { type: Integer, required: true },
  ein: { type: Integer, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = savedOpportunity = mongoose.model(
  "savedOpportunity",
  savedOpportunitySchema
);
