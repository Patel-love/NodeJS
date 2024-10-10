const express = require("express")
const app = express()
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Express Request")

});


app.get("/home", (req, res) => {
    res.send("Welcome To Home Page")

});
app.get('/about', (req, res) => {
    // res.send("Hello About Page " + req.query.name + req.query.age)
    res.send(`Namaste ${req.query.name}. Your age is ${req.query.age}`)
})


app.listen(PORT, () => {
    console.log(`Server Strated PORT : ${PORT}`);

})