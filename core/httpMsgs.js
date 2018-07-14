var settings = require("../settings");
exports.show500 = function (req, resp, err) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(500, "Internal error occurred", { "Content-Type": "text/html" });
        resp.write("<html><head><title>500</title></head><body>500: internal error, Details: " + err + " </body></html>");
    } else {
        resp.writeHead(500, "Internal error occurred", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "ERROR occured:" + err }));
    }
    resp.end();
};
exports.sendJSON = require(req, resp, data){
    resp.writeHead(200, { "Content.Type": "application/json" });
    if (data) {
        resp.write(JSON.stringify(data));
    }
   
    resp.end();
};

exports.show405 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(405, "method not supported", { "Content-Type": "text/html" });
        resp.write("<html><head><title>500</title></head><body>405:method not supported</body></html>");
    } else {
        resp.writeHead(405, "method not supported", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "method not supported"  }));
    }
    resp.end();
};

exports.show404 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(404, "Resources not found", { "Content-Type": "text/html" });
        resp.write("<html><head><title>404</title></head><body>404:Resources not found</body></html>");
    } else {
        resp.writeHead(404, "Resources not found", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "Resources not found" }));
    }
    resp.end();
};

exports.show413 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(413, "Request Entity to Large", { "Content-Type": "text/html" });
        resp.write("<html><head><title>413</title></head><body>413:Request Entity to Large</body></html>");
    } else {
        resp.writeHead(413, "Request Entity to Large", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "Request Entity to Large" }));
    }
    resp.end();
};

exports.send200 = function (req, resp) {
    
    resp.writeHead(200, { "Content-Type": "application/json" });
       
    resp.end();
};

exports.showHome = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(200,  { "Content-Type": "text/html" });
        resp.write("<html><head><title>Home</title></head><body>valid end points<br> /employees -GET -To List All Employees <br>/employees/<empno>- GET To Search for an Employees </body></html>");
    } else {
        resp.writeHead(200, { "Content-Type": "application/json" });
        resp.write(JSON.stringify([
            { url: "/employees", operation: "GET", description: "To List All Employees" },
            { url: "/employees/<empno>", operation: "GET", description: "To search for an employees List All Employees" },
        ]));
    }
    resp.end();
    
};