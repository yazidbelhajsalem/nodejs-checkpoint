const fs = require('fs');
fs.writeFile('welcome.txt','hello node',function(err){
    if(err){
        console.error(err)
    }
    console.log('7obi');
});
fs.readFile('welcome.txt','utf-8',function(err,data){
    if(err){
        console.error(err)
  
    }
console.log('i love you');
})