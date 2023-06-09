# DFS & BFS

## 그래프의 정의

**정점(V)과 간선(E)들의 유한집합**

- 무방향 그래프와 방향 그래프
- 가중치 그래프
- 부분 그래프
- 정점의 차수

## 그래프를 표현하는 자료구조

### 인접 행렬

- 2차원 배열로 각 노드 간의 연결 관계를 표현
- 정점의 개수가 N개라면 N X N의 2차원 배열
- 인접행렬을 A라 할 때 A[i][j] ⇒ 간선(i, j)가 존재 ? 1 : 0
- N개의 정점을 표현하는데 $N^2$의 메모리가 사용되므로 간선이 많은 밀집 그래프를 표현하는데 적합
- 노드 간 연결 가중치가 존재하는 경우 적합(1, 0 대신 가중치를 저장)
- 시간 복잡도
    - 정점 i가 정점 j와 연결되는 간선을 찾는 연산 → $O(1)$
    - 정점의 차수 → $O(N)$
    - 모든 간선의 수 → $O(N^2)$

### 인접 리스트

- 정점 하나당 하나의 연결 리스트를 가짐
- 정점들은 배열로 저장
- 즉, 연결리스트를 배열로 저장
- N개의 정점을 저장하기 위한 공간과 (2)E개의 간선을 저장하기 위한 공간 필요
- 시간복잡도
    - 정점 i가 정점 j와 연결되는 간선을 찾는 연산 → $O(E)$
    - 정점의 차수 → $O(1)$
    - 모든 간선의 수 → $O(N + E)$

## 그래프 탐색

하나의 정점을 시작으로 차례대로 모든 정점을 한 번씩 방문하는 방법

### DFS

그래프의 깊이를 우선 탐색한다.

- 재귀, 스택을 통해 구현
- 리프 노드까지 도달한 후 다음 탐색을 재개
- **리프 노드까지의 경로가 필요할 때 사용**

### BFS

그래프의 너비를 우선 탐색한다.

- 큐를 통해 구현
- 가장 가까운 노드를 먼저 탐색
- **최단거리를 구할 때 사용**

## 기본 문제

[[BOJ] 1260번: DFS와 BFS](https://www.acmicpc.net/problem/1260) <br>
[[BOJ] 2178번: 미로 탐색](https://www.acmicpc.net/problem/2178)
