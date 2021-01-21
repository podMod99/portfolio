snail = function (array) {
  const result = [];

  //   right
  array[0].forEach((num) => result.push(num));
  array.shift();

  //       down
  array.forEach((arr) => {
    result.push(arr[arr.length - 1]);
    arr.pop();
  });

  if (result.length === 1 || result.length === 0) return;
  //   left
  array[array.length - 1].reverse().forEach((num) => result.push(num));
  array.pop();

  //   up
  array.forEach((arr) => {});
};
