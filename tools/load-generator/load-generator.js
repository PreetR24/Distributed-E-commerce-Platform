const targetUrl = process.argv[2];
const totalRequests = Number(process.argv[3]);

if (!targetUrl || !totalRequests) {
  console.log(
    "Usage: node load-generator.js <url> <number-of-requests>"
  );

  process.exit(1);
}

if (totalRequests <= 0 || !Number.isInteger(totalRequests)) {
  console.error("Number of requests must be a positive integer.");
  process.exit(1);
}

async function sendRequest(requestNumber) {
  try {
    const response = await fetch(targetUrl);

    console.log(
      `Request ${requestNumber}/${totalRequests} -> ${response.status}`
    );
  } catch (error) {
    console.error(
      `Request ${requestNumber}/${totalRequests} -> FAILED: ${error.message}`
    );
  }
}

async function generateLoad() {
  console.log(`Target URL: ${targetUrl}`);
  console.log(`Total Requests: ${totalRequests}`);
  console.log("Starting load generation...\n");

  const requests = [];

  for (let i = 1; i <= totalRequests; i++) {
    requests.push(sendRequest(i));
  }

  await Promise.all(requests);

  console.log("\nLoad generation completed.");
}

generateLoad();