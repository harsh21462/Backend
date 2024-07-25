const fs = require('fs');
fs.appendFile("hey.txt", "me good", function(err){
if(err) console.error(err);
else console.log("done");
})
