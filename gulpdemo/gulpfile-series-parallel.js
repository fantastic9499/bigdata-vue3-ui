const { src, dest, watch, series, parallel } = require("gulp");

const task1 = () => {
	console.log("task1 is running!");
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("task1 completed!");
			resolve();
		}, 2000);
	});
};

const task2 = () => {
	console.log("task2 is running!");
	return Promise.resolve();
};

// exports.default = series(task1, task2);
exports.default = parallel(task1, task2);
