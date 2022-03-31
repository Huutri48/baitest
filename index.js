const bai1 = (N) => {
  console.log("bai1");
  let result = "";
  for (let i = 1; i <= 2 * N - 1; i += 2) {
    for (j = 2 * N - 1; j > i; j--) {
      result += " ";
    }
    for (j = 1; j <= i; j++) {
      result += "*" + " ";
    }
    result += "\n";
  }
  for (let i = 2; i < 2 * N - 1; i += 2) {
    for (j = 1; j < i + 1; j++) {
      result += " ";
    }
    for (j = 2 * N - 1; j > i; j--) {
      result += "*" + " ";
    }

    result += "\n";
  }
  console.log(result);
};
bai1(5);

const bai2 = (N) => {
  console.log("bai2");
  if (N === 0) return console.log();
  if (N === 1) return console.log(1);
  let result = [];
  for (let row = 1; row <= N + 1; row++) {
    let arr = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push(result[row - 2][col - 1] + result[row - 2][col]);
      }
    }
    result.push(arr);
  }
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].join(" "));
  }
};
bai2(5);

const bai3 = (row, col) => {
  console.log("bai3");
  let arr = [];
  for (let i = 0; i < row; i++) {
    arr[i] = [];
    for (let j = 0; j < col; j++) {
      arr[i][j] = 0;
    }
  }

  let top = 0;
  let bottom = row - 1;
  let left = 0;
  let right = col - 1;
  let num = 1;
  let direction = 0;

  while (top <= bottom && left <= right) {
    switch (direction % 4) {
      case 0:
        for (let j = left; j <= right; j++) {
          if (num > 9) {
            num = 1;
          }
          arr[top][j] = num++;
        }
        top++;
        direction++;
        break;
      case 1:
        for (let i = top; i <= bottom; i++) {
          if (num > 9) {
            num = 1;
          }
          arr[i][right] = num++;
        }
        right--;
        direction++;
        break;
      case 2:
        for (let j = right; j >= left; j--) {
          if (num > 9) {
            num = 1;
          }
          arr[bottom][j] = num++;
        }
        bottom--;
        direction++;
        break;
      default:
        for (let i = bottom; i >= top; i--) {
          if (num > 9) {
            num = 1;
          }
          arr[i][left] = num++;
        }
        left++;
        direction++;
        break;
    }
  }

  console.log(arr.map((index) => index.join(" ")).join("\n"));
};
bai3(3, 5);
