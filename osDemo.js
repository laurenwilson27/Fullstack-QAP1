// QAP1
// Lauren Wilson
// SD9

const os = require("os");

console.log("Some information about your operating system:");

// Show the user's CPU architecture. You can expect 'x64' on Windows, while it might be 'arm64' on newer Mac OSX devices using the M1 chip
console.log("- Your CPU architecture is " + os.arch());

console.log("- The CPU cores in your machine are as follows:");
// Iterate over the list of logical CPU cores in the user's system
os.cpus().forEach((cpu) => {
  console.log("   - " + cpu.model);
  console.log(`     Speed: ${cpu.speed}MHz`);
});

// Show the home folder
// This is likely C:\Users\{username} on Windows, while it would be /Users/{username} on Mac OSX.
// In Linux, which is another POSIX system, it would instead be /home/{username}
console.log("- Your home folder is " + os.homedir());

// Show the host name (how the computer would identify itself on a network)
console.log("- Your hostname is " + os.hostname());

// Show the user's operating system, and current release version
console.log("- Your operating system is " + os.version() + " " + os.release());

// Show the user's free and total memory. These functions return a value in bytes, so we need to do division to get those numbers in gigabytes
let free = os.freemem() / 1073741824;
let total = os.totalmem() / 1073741824;
console.log(
  `- Your free memory is ${free.toFixed(2)} GB / ${total.toFixed(2)} GB`
);
// Also calculate and show the percentage used with a bit more simple math (and also, some Math)
let usedPercent = Math.floor(((total - free) / total) * 100);
console.log(`  (${usedPercent}% in use)`);

// Show the 'end of line' characters used by the user's operating system
// Format os.EOL first, otherwise it'll be an actual newline...
let eol = os.EOL.replace("\r", "\\r").replace("\n", "\\n");
console.log("- Your system's 'end of line' string is \"" + eol + '"');
