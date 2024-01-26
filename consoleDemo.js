// QAP1
// Lauren Wilson
// SD9

// Start a timer - the name is relevant, as it will be used and shown when the timer is stopped
console.time("Execution time");

// 2 + 2 = 4 is true, so this first assertion will always pass, and the message will never be shown
console.assert(2 + 2 == 4, "Math is a lie and the world is undone.");

// 2 + 2 = 5 is not true, so this assertion will always fail, showing the message
console.assert(2 + 2 == 5, "Shockingly, two plus two does not equal five.");

// Print some funny text the usual way
console.log("This message will self-destruct in five seconds.");

// Set a timeout - after 5 seconds, the function will execute
setTimeout(() => {
  // Clear the terminal with console.clear()
  console.clear();

  // Show an error - it looks the same a console.log, but it's recorded in stderr instead of stdout.
  // This would be meaningful if this code was running as part of a chain of commands, for example in a Linux terminal
  console.error("boom!");

  // Tell the console that future inputs should be 'grouped', and indented.
  // This group is also given a label, which will be shown in the terminal
  console.group(["Label"]);

  // These lines will be indented automatically
  console.log("This log is 'grouped', so it is indented.");
  console.log("So is this one.");

  // Tell the console to *stop* grouping further lines
  console.groupEnd();

  // A message which won't be grouped
  console.log("This one is not.");

  // Stop the "Execution time" timer, and show how long it has been running. Because of the 5 second timeout, it should be over 5 seconds.
  console.timeEnd("Execution time");

  // Print a stack trace from here all the way to the bottom of the stack.
  // I've noticed that my classmates find these terrifying!
  console.trace("Here's how we got here:");
}, 5000);
