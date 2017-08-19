const {resolve} = require('path');
const run = require('./run');

const SCRAPER_CLI = resolve(__dirname, '..', 'python_modules', 'bin', 'instagram-scraper');

module.exports = argv => {
	return run(SCRAPER_CLI, argv)
		.then(res => console.log(res))
		.catch(err => console.error(err));
};
