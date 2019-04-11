module.exports = function(app) {
  // Our model controllers (rather than routes)
  var developers_controller = require("./controllers/developers_controller");

  app.use("/", developers_controller);
  //other routes..
};
