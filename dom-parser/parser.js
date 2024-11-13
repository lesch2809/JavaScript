
function parseNode(aktuellTag) {

    var result = "";
    var element = aktuellTag.childNodes;

    for  (var child in element){
        console.log(child)
        travelThroughNode(aktuellTag)
    }
        
    
    
    return "<table><tr><th>nodeType</th><th>nodeName</th><th>nodeValue</th><th>textContent</th></tr>" + result + "</table>";

    function travelThroughNode(aktuellTag){
            result += "<tr>" +
            "<td>" + aktuellTag.nodeType + "</td>" + 
            "<td>" + aktuellTag.nodeName + "</td>" + 
            "<td>" + aktuellTag.nodeValue + "</td>" +
            "<td>" + aktuellTag.textContent + "</td>" +
            "</tr>" ;
            if (aktuellTag.childNode){
                travelThroughNode(aktuellTag[i])
            }
    }
    
    
    
}

