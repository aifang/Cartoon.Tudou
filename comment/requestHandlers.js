/**
 * Created by Aifang on 2015/9/19.
 */

//var exec=require("child_process").exec;  //子进程
var //querystring=require("querystring"),
    fs=require("fs"),
    formidable=require("../node_modules/formidable");

function start(response) {
    console.log("Request handler 'start' was called.");
    var body ='<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="file" name="upload" multiple="multiple"/>'+
        '<input type="submit" value="Upload file" />'+
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

function upload(response,request){
    console.log("Request handler 'upload' was called.");
    //responseWrite(response,"You've sent: "+querystring.parse(postData).text);

    var form=new formidable.IncomingForm();
    form.uploadDir="c:/temp";
    console.log("about to parse");
    form.parse(request,function(error, fields, files){
        console.log("parsing done");
        fs.renameSync(files.upload.path,"c:/temp/test.png");
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

function responseWrite(response,str){
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(str);
    response.end();
}

function show(response){
    console.log("Request handler 'show' was called.");
    fs.readFile("c:/temp/test.png","binary",function(error,file){
        if(error){
            response.writeHead(500,{"Content-Type":"text/plain"}); //plain 原样输出文本
            response.write(error+"\n");
            response.end();
        }else{
            response.writeHead(200,{"Content-Type":"image/png"});
            response.write(file,"binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show=show;