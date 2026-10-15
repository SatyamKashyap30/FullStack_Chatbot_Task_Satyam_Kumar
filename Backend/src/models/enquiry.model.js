const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    userType: {
      type: String,
      required: true,
      enum: ["Student", "Customer", "Other"]
    },

    interest: {
      type: String,
      required: true
    },

    message: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "In Progress", "Closed"],
      default: "New"
    }
  },
  {
    timestamps: true
  }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

module.exports = Enquiry;