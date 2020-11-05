function orangesRotting(grid) {
  let fresh = 0;
  const q = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) q.push([row, col]);
      if (grid[row][col] === 1) fresh++;
    }
  }
  let minute = 0;
  while (q.length) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const current = q.shift();
      const row = current[0]
      const col = current[1]
      if (row - 1 >= 0 && grid[row - 1][col] === 1) {
        grid[row - 1][col] = 2;
        fresh--;
        q.push([row - 1, col]);
      }
      if (row + 1 < grid.length && grid[row + 1][col] === 1) {
        grid[row + 1][col] = 2;
        fresh--;
        q.push([row + 1, col]);
      }
      if (col - 1 >= 0 && grid[row][col - 1] === 1) {
        grid[row][col - 1] = 2;
        fresh--;
        q.push([row, col - 1]);
      }
      if (col + 1 < grid[0].length && grid[row][col + 1] === 1) {
        grid[row][col + 1] = 2;
        fresh--;
        q.push([row, col + 1]);
      }
    }
    if (q.length > 0) minute++;
  }
  return fresh === 0 ? minute : -1;
};