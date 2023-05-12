const express = require("express");
const bodyParser = require('body-parser')
const {
  listEvents,
  updateEvent,
} = require("./googleCalender/googleCalenderHandler.js");

const port = 8000;
const app = express();
const cors = require("cors");
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    origin: ["http://localhost:3000", "http://localhost:8000"],
  })
);
app.use(bodyParser.json());

app.get("/booking", async (req, res) => {
  const events = await listEvents();
  res.json(events);
});
//lägg in bokad lektion
app.put("/bookingPage/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    await updateEvent(eventId,req.body.name, req.body.mobile );
    res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

app.listen(port, () => {
  console.log(`Our express server is up on port ${port}`);
});
