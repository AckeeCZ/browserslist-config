module.exports = {
	development: [
		'last 1 chrome version',
		'last 1 firefox version',
		'last 1 safari version',
	],
	production: [
		'>0.2%',
		'not dead',
		'not ie <= 11',
		'not op_mini all',
		'not safari <= 14',
		'not ios <= 14 and supports flexbox-gap',
	],
};
