// QAP1
// Lauren Wilson
// SD9

// This code uses an https request, so https also needs to be included
const http = require("http");
const https = require("https");

let gitHubData = {};

// This was all a bit overkill, but I got invested in it

// 'http' isn't just for creating a server, it can also create requests
// Here, we'll use a simple HTTP 'get' request
https.get(
  "https://api.github.com/users/laurenwilson27/repos",
  // The GitHub API rejects any response without a User-Agent header,
  // so we'll include one in our request
  {
    headers: {
      "User-Agent": "QAP1",
    },
  },
  (res) => {
    // The response is an IncomingMessage object broken into 'chunks',
    // which we need to stitch together to get the whole message

    // From what I understand, this behaviour is to prevent the possibility
    // of an extremely large piece of data being buffered all at once
    let resData = "";

    // When we have a data chunk, add it to our accumulated response data
    res.on("data", (chunk) => {
      resData += chunk;
    });

    // This function is called when there is no more data
    res.on("end", () => {
      // Parse the accumulated data into a JS object
      gitHubData = JSON.parse(resData);
    });
  }
);

// With our gitHubData (hopefully) in place, start up a very simple HTTP server
const server = http.createServer((req, res) => {
  // When a request is made to the server, it is handled through this callback function
  // We need to create and send a response to the request

  if (req.url != "/") {
    // This server has no subdirectories. If one is being requested, send a redirect
    // HTTP 301: Moved Permanently
    res.writeHead(301, { Location: "/" });
    res.end(); // a blank end() signals that we have no more to write to the response, and it can be sent
  } else {
    // HTTP 200: Successful
    res.writeHead(200, { "Content-Type": "text/html" });

    // Write some HTML to the response
    // Sorry about the formatting
    // Every repository here should have the same owner, so use some data from the first one
    res.write(
      `<a href="${gitHubData[0].owner.html_url}">` +
        `<img src="${gitHubData[0].owner.avatar_url}" width="48px" height="48px" alt="My github avatar" style='border-radius: 50%'/>` +
        "</a><h3 style='display: inline-block; margin-left: 12px;'>Lauren Wilson's Github Repositories</h3>" +
        "<ul>"
    );

    // gitHubData should be composed of a list, with each element being a repository
    gitHubData.forEach((repo) => {
      res.write(`<li><a href="${repo.html_url}">${repo.name}</a></li>`);
    });

    res.end("</ul>"); // end(chunk) writes that one last chunk before sending the response.
  }
});

// Tell the server to listen on port 4000
server.listen(4000, () => {
  // This callback function is called when the server is successfully listening
  console.log("Server is running!");
  console.log("You can reach it at http://localhost:4000");
});
