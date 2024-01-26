// QAP1
// Lauren Wilson
// SD9

// require the DateTime class from Luxon
const { DateTime } = require("luxon");

// Create a DateTime object holding the current date and time
let now = DateTime.now();

// Show some basic information from the current time
// The DateTime class contains preset constants for a variety of date formats
// Show a 'huge' version of the current date and time, with the day and month written out completely
console.log("It is currently " + now.toLocaleString(DateTime.DATETIME_HUGE));

// Use the plus function - this will add an amount of time defined in the object you give it, and return a new DateTime with that time added
let future = now.plus({ minutes: 45 });
// And the minus function works in much the same way
let past = now.minus({ hours: 2 });

console.log(
  "In 45 minutes it will be " + future.toLocaleString(DateTime.TIME_SIMPLE)
);
console.log("2 hours ago it was " + past.toLocaleString(DateTime.TIME_SIMPLE));

// setZone returns a new TimeZone with an equal time, but in the specified time zone
// Show the current time for the west coast of America
let nevada = now.setZone("America/Los_Angeles");
console.log(
  "It is currently " +
    nevada.toLocaleString(DateTime.TIME_SIMPLE) +
    " in Reno, Nevada"
);

// The toLocaleString function references whichever locale is stored in the individual DateTime
// The locale is set to the user's computer locale by default, but it you can retrieve a DateTime with a different locale using setLocale
// Because each of these functions returns a new DateTime, they can be 'daisy chained' like this
// Additionally, setZone() can take three letter codes for time zones, rather than a 'long form' name like above
// Using all of this knowledge, print the current time and date in France, using a French locale
let france = now
  .setLocale("fr")
  .setZone("CET")
  .toLocaleString(DateTime.DATETIME_HUGE);
console.log("In France, it is currently " + france);
