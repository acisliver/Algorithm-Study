const [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const answer = [];
const array = Array.from({ length: N }, (_, i) => i + 1);
const visited = Array.from({ length: N }, (v) => false);

const getPermutations = (arr, M, permutation) => {
  if (permutation.length === M) {
    answer.push(permutation.join(" "));
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;

    permutation.push(array[i]);
    visited[i] = true;
    getPermutations(arr, M, permutation);
    permutation.pop();
    visited[i] = false;
  }
};
getPermutations(array, M, []);
