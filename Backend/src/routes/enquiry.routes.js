const express = require("express");

const {
  createEnquiry,
  getEnquiries,
  getEnquiry,
  updateEnquiry,
  deleteEnquiry
} = require("../controllers/enquiry.controller");

const router = express.Router();

router.post("/", createEnquiry);
router.get("/", getEnquiries);
router.get("/:id", getEnquiry);
router.put("/:id", updateEnquiry);
router.delete("/:id", deleteEnquiry);

module.exports = router;