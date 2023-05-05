const [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const numbers = Array.from({ length: N }, (_, i) => i + 1);

const getPermutations = (arr, selectNumber) => {
  const results = [];

  if (selectNumber === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const res = getPermutations(numbers, M);

console.log(res.map((v) => v.join(' ')).join('\n'));
