var db = require("../core/db");
var httpMsgs = require("../core/httpMsgs");
var util = require("util");

exports.getList = function (req, resp) {
    db.executeSql("select * from emp", function (data, err) {
        if (err) {
            httpMsgs.show500(req, resp, err);
            //resp.writeHead(500, "Internal error occurred", { "Content-Type": "text/html" });
            //resp.write("<html><head><title>500</title></head><body>500: internal error, Details: " + err + " </body></html>");
            resp.writeHead(500, "Internal error occurred", { "Content-Type": "application/json" });
            resp.write(JSON.stringify({ data: "ERROR occured:" + err }));
        } else {
            httpMsgs.sendJson(req, resp, data);
            //resp.writeHead(200, { "Content.Type": "application/json" });
            //resp.write(JSON.stringify(data));
            //resp.end();
            
        }
       
    });
};
exports.get = function (req, resp, empno) {
    db.executeSql("select * from emp where empno =" + empno, function (data, err) {
        if (err) {
            httpMsgs.show500(req, resp, err);
        } else {
            httpMsgs.sendJson(req, resp, data);
        }
    });
};

exports.add = function (req, resp, reqBody) {
    try {
        if (!reqBody) throw new Error("Input Not Valid");
        var data = JSON.parse(reqBody);
        if (data) {
            var sql = "insert into emp(empno, ename, sale, deptno)values";
            sql += util.format("(%d, '%s',%d,%d)", data.Empno, data.Ename, data.Sale, data.Deptno
                 db.executeSql(sql, function (data, err) {
                    if (err) {
                        httpMsgs.show500(req, resp, err);
                    } else {
                        httpMsgs.send200(req, resp);
                    }
                });
        } else {
            throw new Error("Input Not Valid");
        }
    } catch (ex) {
        httpMsgs.show500(req, resp, err);
    }
};

exports.update = function (req, resp, reqBody) {
    try {
        if (!reqBody) throw new Error("Input Not Valid");
        var data = JSON.parse(reqBody);
        if (data) {
            if (!data.Empno) throw new Error("Empno no provided");

            var sql = "update emp set";

            var isDataProvided = false;

            if (data.Ename) {
                sql += "Ename='" + data.Ename + "',";
                isDataProvided = true;
            }
            if (data.Sal) {
                sql += "Sal=" + data.Sal + ",";
                isDataProvided = true;
            }
            if (data.Deptno) {
                sql += "Deptno=" + data.Deptno + ",";
                isDataProvided = true;
            }

            sql = sql.slice(0, -1);//remove last comma
            sql += "where empno+" + data.Empno;
                    if (err) {
                        httpMsgs.show500(req, resp, err);
                    } else {
                        httpMsgs.send200(req, resp);
                    }
                
        } else {
            throw new Error("Input Not Valid");
        }
    } catch (ex) {
        httpMsgs.show500(req, resp, err);
    }
};

exports.delete = function (req, resp, reqBody) {
    try {
        if (!reqBody) throw new Error("Input Not Valid");
        var data = JSON.parse(reqBody);
        if (data) {
            if (!data.Empno) throw new Error("Empno no provided");

           var sql="delete from emp "
            sql += "where empno+" + data.Empno;
            if (err) {
                httpMsgs.show500(req, resp, err);
            } else {
                httpMsgs.send200(req, resp);
            }

        } else {
            throw new Error("Input Not Valid");
        }
    } catch (ex) {
        httpMsgs.show500(req, resp, err);
    }
};