const execa = require('execa');

module.exports = (cli, args) =>
	execa('nopy', [cli].concat(args))
		.then(res => res.stderr);
