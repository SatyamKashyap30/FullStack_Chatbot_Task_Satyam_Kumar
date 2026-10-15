const Enquiry = require("../models/enquiry.model");

const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, userType, interest, message } = req.body;

    if (!name || !email || !phone || !userType || !interest || !message) {
      return res.status(400).json({
        message: "Please fill all required fields"
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email"
      });
    }

    const phonePattern = /^[6-9][0-9]{9}$/;

    if (!phonePattern.test(phone)) {
      return res.status(400).json({
        message: "Please enter a valid 10-digit phone number"
      });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      userType,
      interest,
      message
    });

    res.status(201).json({
      message: "Enquiry submitted successfully",
      enquiry
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to submit enquiry"
    });
  }
};

const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });

    res.json(enquiries);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch enquiries"
    });
  }
};

const getEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        message: "Enquiry not found"
      });
    }

    res.json(enquiry);
  } catch (error) {
    res.status(400).json({
      message: "Invalid enquiry ID"
    });
  }
};

const updateEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!enquiry) {
      return res.status(404).json({
        message: "Enquiry not found"
      });
    }

    res.json({
      message: "Enquiry updated successfully",
      enquiry
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update enquiry"
    });
  }
};

const deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        message: "Enquiry not found"
      });
    }

    res.json({
      message: "Enquiry deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete enquiry"
    });
  }
};

module.exports = {
  createEnquiry,
  getEnquiries,
  getEnquiry,
  updateEnquiry,
  deleteEnquiry
};