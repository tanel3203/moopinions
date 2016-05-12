var require = meteorInstall({"collections":{"polls.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/polls.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Polls = new Mongo.Collection('polls');                                                                                 // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"bootstrap.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/bootstrap.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// run this when the meteor app is started                                                                             //
Meteor.startup(function () {                                                                                           // 2
                                                                                                                       //
  // if there are no polls available create sample data                                                                //
  if (Polls.find().count() === 0) {                                                                                    // 5
                                                                                                                       //
    // create sample polls                                                                                             //
    var samplePolls = [{                                                                                               // 8
      question: 'Is Meteor awesome?',                                                                                  // 10
      choices: [{ text: 'Of course!', votes: 0 }, { text: 'Eh', votes: 0 }, { text: 'No. I like plain JS', votes: 0 }]
    }];                                                                                                                //
                                                                                                                       //
    // loop over each sample poll and insert into database                                                             //
    _.each(samplePolls, function (poll) {                                                                              // 5
      Polls.insert(poll);                                                                                              // 21
    });                                                                                                                //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _meteor = require('meteor/meteor');                                                                                // 1
                                                                                                                       //
_meteor.Meteor.startup(function () {                                                                                   // 3
  // code to run on server at startup                                                                                  //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./collections/polls.js");
require("./server/bootstrap.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
