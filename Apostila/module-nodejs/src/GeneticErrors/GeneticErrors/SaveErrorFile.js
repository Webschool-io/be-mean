const fs = require('fs');

module.exports = (_file) => {
	fs.writeFile(Error.path, _file, (err, saved) => {
		if(err)
			return "MERDA!";
		console.log('saved');
		return true;
	});
};