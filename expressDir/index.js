const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port  ${port}`);
})

// listen - ek web server banata h jo incoming api calls ke liye liten krta h


// //1. app.use()
// app.use((req,res) =>{
//     // console.log(req);
//      console.log("requst received");

//     //  res.send("this is a basic response");

//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // });

//     code = "<h1>fruits</h1> <ul><li>apple</li><li>orange</li> </ul>"    
//     res.send(code);
// });


// // 2. app.get()
// app.get("/", (req,res) => {
//     res.send("hello! i'm root ");
// });

// app.get("/apple", (req,res) => {
//     res.send("you contected apple");
// });


// app.get("/orange", (req,res) => {
//     res.send("you contected orange");
// });

// app.get("/mango", (req,res) => {
//     res.send("you contected mango");
// });

// app.get("*", (req,res) => {
//     res.send("this path does not exist");
// });

// app.post("/", (req, res) =>{
//     res.send("you sent a post request to root");
// });

// nodemon automatically restart server


// // 2. app.get() variable - :, :variableName
// app.get("/", (req,res) => {
//     res.send("hello! i'm root ");
// });

// app.get("/:username", (req,res) => {
//     let { username, id} = req.params;
//     console.log(req.params);
//     htmlStr = `<a href="${username}"><h1>welcome to the pafe of ${username}</h1></a>`;
//     // htmlStr = `<h1>welcome to the pafe of ${username}</h1>`
//     res.send(htmlStr);
// });


// query string
app.get("/search",(req,res) =>{
    let { q } = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`search results for query: ${q}`);
});
