/**
 * Created by Aifang on 2015/9/19.
 */
var server=require("./server");
var routter=require("./routes/router");
var requestHandlers=require("./comment/requestHandlers");
var handle={};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;

server.start(routter.route,handle);