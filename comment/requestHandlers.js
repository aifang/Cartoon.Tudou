/**
 * Created by Aifang on 2015/9/19.
 */

//var exec=require("child_process").exec;  //子进程

function start(response) {
    console.log("Request handler 'start' was called.");
    var body ='<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
    /**var content="empty";
     console.log( "start 开始时间 "+ new Date().getMilliseconds());
     exec("ls -lah",function(error,stdout,stderr){
        content=stdout;
        console.log( "start 结束时间 "+new Date().getMilliseconds());**/
    responseWrite(response, body);
    /**function sleep(milliSeconds){
        var startTime=new Date().getDate();
        while(new Date().getDate()<startTime+milliSeconds);
    }
     sleep(5000);
     return "Hello Start";*/
}

function upload(response){
    console.log("Request handler 'upload' was called.");
    responseWrite(response,"Hello Upload");
}

function responseWrite(response,str){
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(str);
    response.end();
}

exports.start = start;
exports.upload = upload;