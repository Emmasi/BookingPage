const { google } = require("googleapis");
const { authorize } = require("./auth");
const {CALENDAR_ID} = require("./constants")

let auth = null;
authorize().then((a) => (auth = a));

const listEvents = async () => {
  const calendar = google.calendar({ version: "v3", auth });

  const res = await calendar.events.list({
    calendarId: CALENDAR_ID,
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: "startTime",
  });

  const events = res.data.items
    .filter((event) => event.summary !== "Bokad tid")
    .map((event, i) => {
      const lesson = {};
      lesson.title = event.summary;
      lesson.startTime = event.start.dateTime;
      lesson.endTime = event.end.dateTime;
      lesson.id = event.id;
      lesson.description = event.description;
      if (!lesson || lesson.length === 0) {
        console.log("No upcoming events found.");
        return;
      }
      return lesson;
    });

  return events;
};

const getEvent = async (eventId) => {
  const calendar = google.calendar({ version: "v3", auth });
  return await calendar.events.get({
    eventId: eventId,
    calendarId: CALENDAR_ID,
  });
};

const updateEvent = async (eventId, name, mobile) => {
  const event = await getEvent(eventId);
  const calendar = google.calendar({ version: "v3", auth });
  4;
  calendar.events.update({
    calendarId: CALENDAR_ID,
    eventId: eventId,
    requestBody: {
      description: name + " " + mobile,
      summary: "Bokad tid",
      start: event.data.start,
      end: event.data.end,
    },
  });
};

module.exports.listEvents = listEvents;
module.exports.updateEvent = updateEvent;
