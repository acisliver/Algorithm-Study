### 1. 그래프를 표현하는 자료구조에 대해 설명하시오.

그래프는 정점(Vertex)과 간선(Edge)으로 이루어진 자료구조이다.
그래프는 트리와는 달리 정점마다 간선이 있을 수도 있고 없을 수도 있으며, 루트노드와 부모와 자식이라는 개념이 존재하지 않는다.

-   인접행렬 방식

    인접행렬은 그래프의 노드를 2차원 배열로 만든 것이다.
    노드들 간에 직접 연결이 되어있으면 1을, 아니면 0을 넣어서 행렬을 완성시킨 것이다.

    인접행렬의 장점
    2차원 배열 안에 모든 정점들의 간선 정보가 담겨있기 때문에 두 정점에 대한 연결 정보를 조회할 때 O(1) 의 시간복잡도면 가능하다.
    인접리스트에 비해 구현이 쉽다.
    인접행렬의 단점
    모든 정점에 대해 간선 정보를 대입해야 하므로 $O(n^2)$ 의 시간복잡도가 소요된다.
    무조건 2차원 배열이 필요하기 때문에 필요 이상의 공간이 낭비된다

-   인접리스트 방식

    인접리스트는 그래프의 노드를 리스트로 표현한 것이다.
    주로 정점의 리스트 배열을 만들어 관계를 설정하며 노드들 간에 직접 연결이 되어있으면 해당 노드의 인덱스에 그 노드를 삽입해주면 된다.
    즉, 1에는 2와 3이 직접 연결되어 있기 때문에 배열의 1번째 칸에 2와 3을 넣어준다.

    인접리스트의 장점
    정점들의 연결 정보를 탐색할 때 O(n) 시간이면 가능하다.
    필요한 만큼의 공간만 사용하기 때문에 공간의 낭비가 적다.
    인접리스트의 단점
    특정 두 점이 연결되었는지 확인하려면 인접행렬에 비해 시간이 오래걸린다. (O(E) 시간 소요. E는 간선의 개수)
    구현이 비교적 어렵다.

### 2. DFS를 구현하는 방법을 설명하시오.

DFS란?
DFS는 깊이 우선 탐색 방법으로 트리 구조의 데이터에서 노드마다 가장 깊이까지 탐색한 뒤 다음 노드로 이동하는 방법입니다.

재귀를 이용한 방법 - 방문 여부를 기록하기 위해 배열 visited를 사용하며, 배열 visited의 값을 false로 초기화한다. - 노드를 방문할 때마다 해당 노드의 visited 배열 값을 true로 변경한다. - 해당 노드(v)와 연결된 노드 중에 방문하지 않은 노드(node)이 있다면 방문하지 않은 노드(node)를 시작점으로 하여 DFS를 다시 시작한다.

    ```
    function dfs(graph, v, visited) {
    // 현재 노드를 방문 처리
    visited[v] = true;
    console.log(v);

    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for (let node of graph[v]) {
        if (!visited[node]) {
        dfs(graph, node, visited);
        }
    }
    }

    const graph = [[1, 2, 3], [0, 6], [0], [0, 4, 5], [3], [3], [1]];
    const visited = Array(6).fill(false);

    dfs(graph, 0, visited);
    // 0 1 6 2 3 4 5
    ```

스택을 이용한 방법 - 스택에 시작 노드를 push 한다. - 스택에서 노드를 pop하고 해당 노드(v)가 방문하지 않은 노드라면 방문처리 한다. - 노드(v)와 연결된 노드 중에서 방문하지 않은 노드(node)이 있다면 stack에 push 한다. - stack의 길이가 0이 될 때까지 2, 3번 과정을 반복한다.

    ```
    function dfs(graph, start, visited) {
    const stack = [];
    stack.push(start);

    while (stack.length) {
        let v = stack.pop();
        if (!visited[v]) {
        console.log(v);
        visited[v] = true;

        for (let node of graph[v]) {
            if (!visited[node]) {
            stack.push(node);
            }
        }
        }
    }
    }
    const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
    const visited = Array(7).fill(false);

    dfs(graph, 0, visited);
    // 0 4 3 2 5 1
    ```

### 3. BFS를 구현하는 방법을 설명하시오.

BFS란?
BFS는 너비 우선 탐색 방법으로 트리 구조 데이터에서 노드의 인접 데이터를 모두 탐색한 뒤 다음 데이터로 이동하는 방법입니다.

BFS의 동작 방식
탐색 시작 노드를 큐에 삽입하고 방문 처리한다.
큐에서 노드를 꺼내 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리한다.
2번의 과정을 더 이상 수행할 수 없을 때까지 반복한다.

    ```
    function BFS(graph, start, visited) {
    const queue = new Queue();
    queue.push(start);
    visited[start] = true;

    while (queue.size()) {
        const v = queue.popleft();
        console.log(v);

        for (const node of graph[v]) {
        if (!visited[node]) {
            queue.push(node);
            visited[node] = true;
        }
        }
    }
    }

    const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
    const visited = Array(6).fill(false);
    BFS(graph, 0, visited);
    // 0 1 2 4 5 3
    ```

큐 구현 코드

    ```
    class Queue {
    constructor() {
        this.store = {};
        this.front = 0;
        this.rear = 0;
    }

    size() {
        if (this.store[this.rear] === undefined) {
        return 0;
        } else {
        return this.rear - this.rear + 1;
        }
    }

    push(value) {
        if (this.size() === 0) {
        this.store['0'] = value;
        } else {
        this.rear += 1;
        this.store[this.rear] = value;
        }
    }

    popleft() {
        let temp;
        if (this.front === this.rear) {
        temp = this.store[this.front];
        delete this.store[this.front];
        this.front = 0;
        this.rear = 0;
        return temp;
        } else {
        temp = this.store[this.front];
        delete this.store[this.front];
        this.front += 1;
        return temp;
        }
    }
    }
    ```
