import { request } from "node:http";

const options = {
    host : "localhost",
    path: "/api/v1/health",
    port : "3333",
    timeout : 2000
};

const healthCheck = request(options, (res) => {
    if (res.statusCode === 200) {
        process.exit(0);
    }
    else {
        console.error(res.statusMessage)
        process.exit(1);
    }
});

healthCheck.on('error', (err) => {
    console.error(err);
    process.exit(1);
});

healthCheck.end();