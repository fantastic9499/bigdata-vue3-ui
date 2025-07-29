exports.default = (cb) => {
	console.log("Gulp is running!");
	// return setTimeout(cb, 2000);
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("Gulp task completed!");
			resolve();
		}, 2000);
	});
};
