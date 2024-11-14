function parseNode(startNode) {
    var result = "";
    var elements = startNode.childNodes;
    
   
    for (var child of elements) {
        travelThroughNode(child);
    }

    return "<table><tr><th>nodeType</th><th>nodeName</th><th>nodeValue</th><th>textContent</th></tr>" + result + "</table>";
    function travelThroughNode(node) {
        result += "<tr>"
        + "<td>" + node.nodeType + "</td>"
        + "<td>" + node.nodeName + "</td>"
        + "<td>" + node.nodeValue + "</td>"
        + "<td>" + node.textContent + "</td>"
        + "</tr>";
        if (node.childNodes) {
            for (var child of node.childNodes) {
                travelThroughNode(child);
            }
        }
    }
}
