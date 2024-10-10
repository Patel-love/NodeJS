const http = require("http")
const fs = require("fs");


const manavServer = http.createServer((req, res) => {
    console.log("New Server Create");
    // console.log(req);

    const hi = `New Request Recivied :${Date.now()} :${req.url} \n `
    fs.appendFile("log.txt", hi, (err, data) => {
        //  res.end("Welcome....")

        switch (req.url) {
            case "/home":
                res.end("welcome to home page")
                break;
            case "/about":
                res.end("welcome to about page")
                break;
            default:
                res.end("404 Error, Page Not Found!");
        }
    })

})

manavServer.listen(1802, () => {
    console.log("Server  Started");

})