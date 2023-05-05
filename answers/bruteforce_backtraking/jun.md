### 1. 완전탐색과 백트래킹의 차이를 설명하시오.

완전 탐색 = 모든 경우를 탐색해 가면서 무언가를 세거나 어떤 조건이 가능한 경우가 있는지 확인하는 방법

1.  완전 탐색 문제 판별

    -   하나의 경우마다 따져야 할 게 명확한 경우
    -   어떤 상태를 구성하고, 그 상태가 특정 조건을 만족하는지 검토해야 하는 등의 문제
    -   나올 수 있는 경우의 수가 모두 탐색할 수 있을 만큼 적은 경우

2.  완전 탐색 문제 접근법

    -   모든 경우를 생성할 수 있는 방법을 생각한다.
    -   각각의 경우에 대해 그 문제의 조건을 만족하는지 체크한다.

백트레킹 = 재귀를 이용한 완전 탐색, 현재 상태에서 전이될 수 있는 다음 상태들을 재귀적으로 탐색하다가 특정 조건을 만족하면 문제에서 따져야 하는 무언가가 된다.

1. 백트레킹 문제 접근법

    - 초기 상태가 무엇인지 생각
    - 거기서 재귀적으로 전이될 수 있는 상태가 무엇인지 생각
    - 생성하고 있는 상태가 어떤 사전 조건(base case)을 만족하게 된 경우 문제에서 따져야하는 상태가 되는지 고민

2. 백트레킹에서 가지치기

    - 가능한 경우들 중 하나만 필요하다면 그 하나를 찾는 순간 나머지를 더 탐색할 필요가 없어진다.
    - 상태를 전이시켜가는 도중 목표에 도달할 수 없는 것을 미리 알고 있는 경우, 따지지 않아도 된다.

### 2. 경우의 수에 대해 간단히 설명하시오.

어떤 사건 혹은 일이 일어날 수 있는 경우의 가짓수를 수로 표현

1. 완전 탐색으로 경우의 수를 푸는 알고리즘

    - 순열
    - 조합
    - 중복

### 3. 경우의 수를 구하는 방법인 순열, 조합에 대해 설명하시오.

조합 = 서로 다른 n 개의 원소를 가지고 순서에 상관없이 r개의 원소를 선택하는 것이다. nCr

```javascript
const getCombinations = (arr, num) => {
    const results = [];

    // nC1 이며, 1이면 의미 없기때문에 바로 반환한다.
    if (num === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        // 조합에서는 값 순서에 상관없이 중복이 되면 안되기 때문에 현재값 이후의 배열들만 추출한다.
        const rest = origin.slice(index + 1);

        // 나머지 배열을 기준으로 다시 조합을 실시한다.
        // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
        const combinations = getCombinations(rest, num - 1);

        // 기준값(fixed)에 돌아온 조합(combinations)을 붙인다.
        const attached = combinations.map(v => [fixed, ...v]);

        // 붙인 값을 결과 값에 넣어준다.
        results.push(...attached);
    });

    return results;
};
```

순열 = 서로 다른 n개의 원소를 가지고 중복 없이 순서에 상관없이 r개의 원소를 선택 혹은 나열하는 것, nPr

```javascript
const getPermutations = (arr, num) => {
    const results = [];

    // nP1 이며, 1이면 의미 없기때문에 바로 반환한다.
    if (num === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        // 순열에서는 조합과 달리 순서만 바뀌면 중복이 아니기때문에 기준값을 제외한 나머지 배열을 넣어준다.
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

        // 나머지 배열을 기준으로 다시 순열을 구한다.
        // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
        const permutations = getPermutations(rest, num - 1);

        // 기준값(fixed)에 순열(permutations)을 붙인다.
        const attached = permutations.map(v => [fixed, ...v]);

        // 붙인 값을 결과 값에 넣어준다.
        results.push(...attached);
    });

    return results;
};
```

### 4. 완전탐색과 백트래킹의 각 관점에서 순열을 구하는 방법의 차이를 설명하시오.

### 기본 문제

[[BOJ] N과 M(1)](https://www.acmicpc.net/problem/15649)
[[BOJ] N과 M(2)](https://www.acmicpc.net/problem/15650)
[[BOJ] 연산자 끼워넣기](https://www.acmicpc.net/problem/14888)
