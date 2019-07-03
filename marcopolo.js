// macropolo function
module.exports.marcopolo = function (req, res) {
	var pid = process.pid;
	var s = '';
	console.log('output here.')
	for (var i = 1; i <= 1000000; i++) { // simulate CPU work
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
			res.write(s.substring(0, s.length-1))
			res.write("\n")
			s = ''
		}
	}
	res.end();
	console.log(`handled by process ${pid}`);
};
