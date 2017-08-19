const execa = require('execa');
const {resolve} = require('path');

const SCRAPER = resolve(__dirname, '..', 'python_modules', 'bin', 'instagram-scraper');

const run = args => execa('nopy', [SCRAPER].concat(args));

module.exports = (input, argv) => {
	return run(input ? [input].concat(argv) : argv)
		.then(res => console.log(res))
		.catch(err => err)
};
