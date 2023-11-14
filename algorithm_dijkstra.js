const graph = {};

graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

const shortPath = (graph, start) => {
    let costs = {}; // табличка с кротчайшеми путями
    let processed = []; // массив проверенный узлов
    let neighbors = {}; // соседние вершины расматриваемого узла
    Object.keys(graph).forEach((node) => {
        // инициализирует объект costs значениями расстояний от начальной вершины до каждой другой вершины в графе
        if (node !== start) {
            let value = graph[start][node];
            costs[node] = value || 1000000;
        }
    });
    let node = findNodeLowestCost(costs, processed);
    while (node) {
        // пока узел с минимальным значением сущетсвует
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach((neighbor) => {
            let newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        });
        processed.push(node);
        node = findNodeLowestCost(costs, processed);
    }
    return costs;
};

const findNodeLowestCost = (costs, processed) => {
    let lowestCost = 1000000; // минимальное значение
    let lowestNode; // поле с минимальным значением
    Object.keys(costs).forEach((node) => {
        let cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    });
    return lowestNode;
};
console.log(shortPath(graph, 'a'));
