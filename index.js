//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=80;
var dispatcher = require('httpdispatcher');

//Lets use our dispatcher
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        response.setHeader("Access-Control-Allow-Origin", "*");
        // response.writeHead(200, {'Content-Type': 'application/json'});
        dispatcher.dispatch(request, response);

    } catch(err) {
        console.log(err);
    }
}
dispatcher.onGet("/getFiles", function(req, res) {
    var response = [
        {
            isDir: true,
            display_name: "aakldja"
        },
        {
            isDir: true,
            display_name: "b"
        },
        {
            isDir: true,
            display_name: "c"
        },
        {
            isDir: false,
            display_name: "d"
        },
        {
            isDir: true,
            display_name: "b"
        },
        {
            isDir: true,
            display_name: "c"
        },
        {
            isDir: false,
            display_name: "d"
        },
        {
            isDir: true,
            display_name: "b"
        },
        {
            isDir: true,
            display_name: "c"
        },
        {
            isDir: false,
            display_name: "d"
        },
        {
            isDir: true,
            display_name: "b"
        },
        {
            isDir: true,
            display_name: "c"
        },
        {
            isDir: false,
            display_name: "d"
        },
        {
            isDir: true,
            display_name: "b"
        },
        {
            isDir: true,
            display_name: "c"
        },
        {
            isDir: false,
            display_name: "d"
        },
        {
            isDir: true,
            display_name: "b"
        },
        {
            isDir: true,
            display_name: "c"
        },
        {
            isDir: false,
            display_name: "d"
        },
        {
            isDir: true,
            display_name: "b"
        },
        {
            isDir: true,
            display_name: "c"
        },
        {
            isDir: false,
            display_name: "d"
        },
        {
            isDir: true,
            display_name: "b"
        },
        {
            isDir: true,
            display_name: "c"
        },
        {
            isDir: false,
            display_name: "d"
        },
        {
            isDir: false,
            display_name: "e"
        }
    ];
    res.end(JSON.stringify(response));
});

dispatcher.onGet("/jsonp", function(req, res) {
    console.log(req.params.callback);
    var response = {
        "name":"Stenal"
    };
    res.end(req.params.callback+"("+JSON.stringify(response)+")");
});


//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});