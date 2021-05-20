var nodes = [
    { name: "0", x: 100, y: 100, r: 12, tag: "Cliente 1" },
    { name: "1", x: 100, y: 250, r: 6, tag: "Cliente 2" },
    { name: "2", x: 100, y: 400, r: 20, tag: "Cliente 3" },
    { name: "3", x: 100, y: 550, r: 25, tag: "Cliente 4" },
    { name: "4", x: 430, y: 150, r: 9, tag: "Producto 1" },
    { name: "5", x: 430, y: 220, r: 30, tag: "Producto 2" },
    { name: "6", x: 430, y: 290, r: 27, tag: "Producto 3" },
    { name: "7", x: 430, y: 340, r: 11, tag: "Producto 4" },
    { name: "8", x: 430, y: 420, r: 32, tag: "Producto 5" },
    { name: "9", x: 430, y: 530, r: 15, tag: "Producto 6" },
    { name: "10", x: 700, y: 100, r: 21, tag: "Cliente 5" },
    { name: "11", x: 700, y: 250, r: 30, tag: "Cliente 6" },
    { name: "12", x: 700, y: 400, r: 23, tag: "Cliente 7" },
    { name: "13", x: 700, y: 550, r: 19, tag: "Cliente 8" },
]; //svg element


var edges = [
    { source: nodes[0], target: nodes[4] },
    { source: nodes[0], target: nodes[9] },
    { source: nodes[0], target: nodes[6] },
    { source: nodes[0], target: nodes[7] },
    { source: nodes[1], target: nodes[5] },
    { source: nodes[1], target: nodes[4] },
    { source: nodes[1], target: nodes[6] },
    { source: nodes[1], target: nodes[7] },
    { source: nodes[1], target: nodes[9] },
    { source: nodes[2], target: nodes[8] },
    { source: nodes[2], target: nodes[9] },
    { source: nodes[2], target: nodes[5] },
    { source: nodes[3], target: nodes[4] },
    { source: nodes[3], target: nodes[8] },
    { source: nodes[3], target: nodes[6] },
    { source: nodes[3], target: nodes[5] },
    { source: nodes[3], target: nodes[7] },
    { source: nodes[3], target: nodes[9] },
    { source: nodes[10], target: nodes[8] },
    { source: nodes[10], target: nodes[9] },
    { source: nodes[10], target: nodes[5] },
    { source: nodes[11], target: nodes[4] },
    { source: nodes[11], target: nodes[8] },
    { source: nodes[11], target: nodes[6] },
    { source: nodes[12], target: nodes[5] },
    { source: nodes[12], target: nodes[7] },
    { source: nodes[13], target: nodes[9] },
];

var w = 1300;
var h = 1000;
var svg = d3.select("body").append("svg").attr({ "width": w, "height": h });

//linking data to circles and lines (nodes and edges)
var edge = svg.selectAll("line")
    .data(edges)
    .enter()
    .append("line")
    .attr("id", function(d, i) { return 'edge' + i })
    .attr('marker-end', 'url(#circle)')
    .attr()
    .attr("x1", function(d) { return d.source.x })
    .attr("y1", function(d) { return d.source.y })
    .attr("x2", function(d) { return d.target.x })
    .attr("y2", function(d) { return d.target.y })
    .style("stroke", "rgb(135,206,250)")
    .style("stroke-opacity", "0.4")
    .style("pointer-events", "none");


var node = svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("id", function(d, i) { return 'circle' + i })
    .attr("r", function(d) { return d.r })
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("fill", "rgb(135,206,250)")
    .attr("fill-opacity", "1")

function linked(index) {
    b = [
        [],
        [],
        []
    ]
    for (var z = 0; z < edges.length; z++) {
        if (edges[z].source.name == index || edges[z].target.name == index) {

            b[2].push('#edge' + z);
            var origin = "#circle" + edges[z].source.name;
            var target = "#circle" + edges[z].target.name;


            if (!b[0].includes(origin)) {
                b[0].push(origin);
            }
            if (!b[1].includes(target)) {
                b[1].push(target);
            }
        }
    }
    return b;
}

function handleMouseOver(d, i) {
    links = linked(i);
    console.log("edges: ");
    for (var z = 0; z < links[2].length; z++) { //recorremos las aristas que pintaremos
        console.log(links[2][z]);
        d3.select(links[2][z]).transition().duration(600).style("stroke", "rgb(30,144,255)").style("stroke-opacity", "0.9");
    }
    console.log("origin: ");
    for (var z = 0; z < links[0].length; z++) { //recorremos los nodos origen
        console.log(links[0][z] + " ");
        d3.select(links[0][z]).transition().duration(600)
            .attr("r", function(d) { return d.r + 3 }).attr("fill", "rgb(70,130,180)").attr("fill-opacity", "1");
    }
    console.log("target: ");
    for (var z = 0; z < links[1].length; z++) { //recorremos los nodos destino
        console.log(links[1][z] + " ");
        d3.select(links[1][z]).transition().duration(600)
            .attr("r", function(d) { return d.r + 3 }).attr("fill", "rgb(65,10,225)").attr("fill-opacity", "1");
    }
}

function handleMouseOut(d, i) {

    links = linked(i);

    for (var z = 0; z < links[2].length; z++) {
        d3.select(links[2][z]).transition().duration(600).style("stroke", "rgb(135,206,250)").style("stroke-opacity", "0.4");
    }
    for (var z = 0; z < links[0].length; z++) {
        d3.select(links[0][z]).transition().duration(900)
            .attr("r", function(d) { return d.r }).attr("fill", "rgb(135,206,250)").attr("fill-opacity", "1");
    }
    for (var z = 0; z < links[1].length; z++) {

        d3.select(links[1][z]).transition().duration(900)
            .attr("r", function(d) { return d.r }).attr("fill", "rgb(135,206,250)").attr("fill-opacity", "1");
    }
}
for (var i = 0; i < nodes.length; i++) {
    d3.select("body").append("div").attr("class", "node_names").style("left", (nodes[i].x + 30) + "px").style("top", (nodes[i].y + 20) + "px").html(nodes[i].tag);
}