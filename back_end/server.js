
const express = require("express");
const mongoose = require('mongoose');
const app = express();
var cors = require('cors')
const port = process.env.port || 5002
const userRouter = require('./Router/userRouts');
const blog = require('./Router/blogRouts');

const common = require('./Router/commonRoutes');
const user = require("./models/user");
const { Blog } = require("./models/blogModel");
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

app.use(cors());
// const url = 'mongodb://localhost:27017/newtest';
const url = 'mongodb+srv://jaspreet98134:1ZMAOfDsmMjhx6I9@cluster0.ngta5oz.mongodb.net/blogtest'

// const url = "mongodb://localhost:27017/example"

var cookieParser = require('cookie-parser')

app.use(cookieParser());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:3001"],
        credentials: true,
    })
)


app.get('/call', function (req, res) {
    // Cookies that have not been signed
    res.cookie("authToken", "token", { httpOnly: false });
    console.log(res.cookie("authToken", "token", { httpOnly: false }));
    res.status(200).send("Logged in successfully");

})

app.use('/api', userRouter);

app.use('/blogapi', blog);
app.use('/common', common);


app.listen(port, () => {
    console.log(`server is running on port number ${port}`)
})








// let express = require("express");
// let cookieParser = require("cookie-parser");
// const cors = require("cors");
// //setup express app
// let app = express();

// app.use(
//     cors({
//         origin: ["http://localhost:8000", "http://localhost:3000", "http://localhost:3001"],
//         methods: ["GET", "POST", "PUT"],
//         credentials: true,
//     })
// );

// app.use(cookieParser());

// //basic route for homepage
// app.get("/", (req, res) => {
//     res.send("Express app is created successfully, and you are on homepage");
// });

// // create a JSON object to store car data
// let car = {
//     name: "BMW",
//     model: "X5",
//     price: 50000,
// };

// // route to set car object as cookie
// app.get("/setcar", (req, res) => {
//     console.log(req.cookies, "yyyyyyyyyyyyyyyyyyiiiiiiiiiiiiiiiiiiiiiii");
//     res.cookie("carData", car);
//     res.send({ data: "car data is stored in cookies", cook: req.cookies });
// });

// // route to get car object from cookies
// app.get("/getcar", (req, res) => {
//     res.send(req.cookies);
// });

// // route to clear car object from cookies
// app.get("/clear", (req, res) => {
//     res.clearCookie("carData");
//     res.send("Cookies are cleared!");
// });

// //server listens to port 3000
// app.listen(8000, (err) => {
//     if (err) throw err;
//     console.log("listening on port 8000");
// });