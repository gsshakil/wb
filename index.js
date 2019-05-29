const express = require('express');
const app = express();
app.use(express.static("build")); // myApp will be the same folder name.
app.get('/', function (req, res,next) {
 res.redirect('/');
});
app.listen(process.env.PORT || 8080);
console.log("MyProject Server is Listening on port 8080");