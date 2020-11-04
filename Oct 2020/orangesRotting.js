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
        const [x, y] = q.shift();
        if (x - 1 >= 0 && grid[x - 1][y] === 1) {
          grid[x - 1][y] = 2;
          fresh--;
          q.push([x - 1, y]);
        }
        if (x + 1 < grid.length && grid[x + 1][y] === 1) {
          grid[x + 1][y] = 2;
          fresh--;
          q.push([x + 1, y]);
        }
        if (y - 1 >= 0 && grid[x][y - 1] === 1) {
          grid[x][y - 1] = 2;
          fresh--;
          q.push([x, y - 1]);
        }
        if (y + 1 < grid[0].length && grid[x][y + 1] === 1) {
          grid[x][y + 1] = 2;
          fresh--;
          q.push([x, y + 1]);
        }
      }
      if (q.length > 0) minute++;
    }
    return fresh === 0 ? minute : -1;
  };