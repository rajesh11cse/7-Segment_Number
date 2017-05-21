 var fs = require('fs');

 module.exports.marcopolo = function(req, res) {
 	var pid = process.pid;
 	var s = '';
	  for(var i = 1; i<=10000; i++){ // simulate CPU work

	  	if((i% 4 === 0) && (i%7 === 0)){
	  		s+='marcopolo,';
	  	}else if(i%7 === 0){
	    // console.log('polo');
	    s+='polo,';

	}else if (i%4 === 0) {
	    // console.log('marco');
	    s+='marco,';

	}
	else{
		s+=i+',';
	    // console.log(i);
	}
	if(i%100 === 0);
		fs.writeFile('marcopolo.txt',s, function(err){
			 // console.log("Going to write into existing file or creating a new file if not exist");
			 if (err) {
			 	return console.error(err);
			 } else {
			    //console.log("Data written successfully in file!");
			}
		});
	} 
	console.log("Data written successfully in file!");
	res.end(`handled by process ${pid}`);
};