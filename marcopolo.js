
// macropolo function
module.exports.marcopolo = function (req, res) {
	var pid = process.pid;
	var s = '';
	for (var i = 1; i <= 100000; i++) { // simulate CPU work
		if ((i % 4 === 0) && (i % 7 === 0)) {
			s += 'marcopolo,';
		} else if (i % 7 === 0) {
			s += 'polo,';
		} else if (i % 4 === 0) {
			s += 'marco,';
		}
		else {
			s += i + ',';
		}
		if (i % 1000 === 0) {
			console.log(s);
		}
	}
	res.end(`handled by process ${pid}`);
};