function  numSubmat(matrix) {
	let result = 0;
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			if (matrix[row][col] === 1) {
				let min = col > 0 ? 1 + matrix[row][col-1] : 1;
                matrix[row][col] = col > 0 ? 1 + matrix[row][col-1] : 1
                result += matrix[row][col];
				let prevRow = row - 1;
				while (prevRow >= 0 && min > 0) {
					min = Math.min(min, matrix[prevRow][col]);
                    prevRow--
					result += min;
				}
			} 
		}
	}

	return result;
};