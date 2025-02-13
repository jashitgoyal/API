const { v4: uuid } = require("uuid");

const date = new Date();
const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

// Function to log events to the console instead of a file
const logEvents = (message) => {
  const dateTime = new Intl.DateTimeFormat("en-GB", options).format(date);
  const logItem = `${dateTime}\t${uuid()}\t${message}`;

  console.log(logItem); // Print log message to console
};

// Express middleware logger
const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`);
  console.log(`${req.method}\t${req.path}`);
  next();
};

module.exports = { logEvents, logger };
