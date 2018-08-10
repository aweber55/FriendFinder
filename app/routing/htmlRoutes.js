var path = require("path");


module.exports = function(app) {

//export the path to the home page and the survey page, will add a app.use function to create a 
//default to go to home page later
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  app.use(function (req,res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});
  
};