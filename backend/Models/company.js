const mongoose = require('../db');
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true, // removes leading and trailing whitespaces
  },
  type: {
    type: String,
    required: true,
    enum: ['Public', 'Private'], // restricts the value to either 'Public' or 'Private'
  },
  purpose: {
    type: String,
    required: true,
  },
  paidCapital: {
    type: Number,
    required: true,
    min:[0, 'wrong min paid Capital'], // ensures the value is not negative
  },
  authCapital: {
    type: Number,
    required: true,
    min:[0, 'wrong min authorized Capital'],
  },
  reservedName: {
    type: Boolean,
    default: false, // sets a default value if not provided
  },
  registerAddress: {
    type: String,
    required: true,
  },
  addressProof: { // corrected typo from addressProff to addressProof
    type: String,
    required: true,
  },
  // Add more fields as needed
}, { timestamps: true }); // automatically adds createdAt and updatedAt fields

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
