var array = [
	["x", "o", "x"], //x=0
	["x", "", ""], //x=1
	["x", "", ""], //x=2
	//y=0,y=1,y=2
];
//row
function solve(array) {
	for (let x = 0; x < 3; x++) {
		var row = array[x][0];
		for (let y = 1; y < 3; y++) {
			var current = array[x][y];
			if (row === current) {
				console.log(row, current);
				console.log(x, y);
				if (y == 2) {
					console.log("match row ", x + 1);
					return true;
				}
			} else {
				break;
			}
		}
	}
	for (let x = 0; x < 3; x++) {
		var row = array[0][x];
		for (let y = 1; y < 3; y++) {
			var current = array[y][x];
			if (row === current) {
				if (y == 2) {
					console.log("match col at col:", x + 1);
					return true;
				}
			} else {
				break;
			}
		}
	}
	//Diagonal
	for (let i = 0; i < 2; i++) {
		//left to right
		var current = array[i][i];
		var next = array[i + 1][i + 1];
		if (current !== next) {
			break;
		}
		if (i == 1) {
			console.log("match diagonal");
		}
	}
	console.log("here");
	for (let i = 0; i < 2; i++) {
		//right to left
		var current = array[2 - i][i]; //2, 0
		var next = array[2 - (i + 1)][i + 1]; //1,1...0,2
		console.log("current:", current, "next", next);
		if (current !== next) {
			break;
		}
		if (i == 1) {
			console.log("match diagonal");
		}
	}
}
solve(array);
