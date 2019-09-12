new Promise((resolve, reject) => {
	resolve(123)

	setTimeout(function() {
		resolve(321)
	}, 0)
}).then(console.log).then(console.log)
