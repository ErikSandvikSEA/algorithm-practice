var customSortString = function(S, T) {
	let catalog = {};
	let result = '';

	for (let i = 0; i < S.length; i++) {
        const char = S[i]
		catalog[char] = 0;
	}

	for (let i = 0; i < T.length; i++) {
        const char = T[i]
		if (char in catalog) {
			catalog[char]++;
		} else {
			result += char;
		}
	}

	for(const char in catalog) {
		if (catalog[char] !== 0) {
			for (let i = 0; i < catalog[char]; i++) {
				result += char;
			}
		}
	}

	return result;
	//
};