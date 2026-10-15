const express = require("express");
const cors = require("cors");

const enquiryRoutes = require("./routes/enquiry.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DroneTV Backend is running");
});

app.use("/api/enquiries", enquiryRoutes);

module.exports = app;