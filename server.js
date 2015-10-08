/**
 * Created by Aifang on 2015/9/19.
 */
//var http = require("http");
//
//http.createServer(function(request, response){
//    response.writeHead(200,{"Content-Type":"text/plain"});
//    response.write("Hello World");
//    response.end();
//}).listen(8888);

var http = require("http");
var url=require("url");

function start(route,handle) {
    function onRequest(request, response) {
        //var postData="";
        var pathname=url.parse(request.url).pathname;
        if(pathname=="/favicon.ico") return;
        console.log("Request for "+pathname+" received");

        route(handle,pathname,response,request);
        //request.setEncoding("utf-8");
        //
        //request.addListener("data",function(postDataChunk){
        //    postData+=postDataChunk;
        //    console.log("received POST data chunk '"+postDataChunk+"'.");
        //});
        //
        //request.addListener("end",function(){
        //    route(handle,pathname,response,postData);
        //});

        //var content= route(handle,pathname,response);

        /*response.writeHead(200, {"Content-Type": "text/plain"});
        //response.write("Hello World");
        response.write(content);
        response.end();*/
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;

