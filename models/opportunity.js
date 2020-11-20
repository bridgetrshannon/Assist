const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const opportunitySchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  organization: { type: String, required: true },
  email: { type: String, required: true },
  textarea: String,
  opportunityDate: { type: Date },
  phoneNumber: { type: Number, required: true },
  ein: { type: Number },
  date: { type: Date, default: Date.now },
});

const Opportunity = mongoose.model("Opportunity", opportunitySchema);

module.exports = Opportunity;
