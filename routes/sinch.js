// add requires
var express = require("express");
var router = express.Router();

var svamlResponse = {
  instructions: [
    {
      name: "Say",
      text: "Welcome to the hotline",
      locale: "en-US"
    }
  ],
  action: {
    name: "ConnectConf",
    conferenceId: "myconference1",
    cli: "",
    suppressCallbacks: true
  }
};

router.post("/", function(req, res, next) {
  svamlResponse.action.cli = req.body.cli;
  res.json(svamlResponse);

  //console.log("in here");
  ////echo the post
  //res.json(req.body);
});
module.exports = router;
