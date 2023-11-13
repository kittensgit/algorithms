const graph = {};

graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['e', 'd'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

const bfs = (graph, start, end) => {
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
        const current = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }
    return false;
};

console.log(bfs(graph, 'a', 'g'));
