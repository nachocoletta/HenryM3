var fs  = require("fs")
var http  = require("http")

// http.createServer((req,res) => {
//     if (req.url.includes('images')) {
//         res.writeHead(200, { 'Content-Type': 'image/jpeg' })
//         let img = fs.readFileSync(__dirname + `${req.url}`)
//         res.end(img)
//       }
//       else {
//         res.writeHead(404);
//         res.end();
//       }
// }).listen(3000, '127.0.0.1');

// Escribí acá tu servidor
http.createServer( function(req,res){
    var img = ""; 

    if( req.url === '/arcoiris_doge.jpg'){ //Si la URL es / devolvemos el HTML
		res.writeHead(200, { 'Content-Type':'image/jpeg' })
		 img = fs.readFileSync(__dirname +'/images/arcoiris_doge.jpg'); // ver esta linea
		// res.end(img);
	}else if( req.url === '/badboy_doge.jpg'){ //Si la URL es / devolvemos el HTML
            res.writeHead(200, { 'Content-Type':'image/jpeg' })
             img = fs.readFileSync(__dirname +'/images/badboy_doge.jpg'); // ver esta linea
            // res.end(img);
    }else if( req.url === '/code_doge.jpg'){ //Si la URL es / devolvemos el HTML
        res.writeHead(200, { 'Content-Type':'image/jpeg' })
         img = fs.readFileSync(__dirname +'/images/code_doge.jpg'); // ver esta linea
        // res.end(img);
    }else if( req.url === '/resaca_doge.jpg'){ //Si la URL es / devolvemos el HTML
        res.writeHead(200, { 'Content-Type':'image/jpeg' })
         img = fs.readFileSync(__dirname +'/images/resaca_doge.jpg'); // ver esta linea
        // res.end(img);
    }else if( req.url === '/retrato_doge.jpg'){ //Si la URL es / devolvemos el HTML
        res.writeHead(200, { 'Content-Type':'image/jpeg' })
         img = fs.readFileSync(__dirname +'/images/retrato_doge.jpg'); // ver esta linea
        // res.end(img);
    }else if( req.url === '/sexy_doge.jpg'){ //Si la URL es / devolvemos el HTML
        res.writeHead(200, { 'Content-Type':'image/jpeg' })
         img = fs.readFileSync(__dirname +'/images/sexy_doge.jpg'); // ver esta linea
        // res.end(img);
    }else{
		res.writeHead(404); //Ponemos el status del response a 404: Not Found
		res.end(); //No devolvemos nada más que el estado.
    }
    //console.log(img);
    res.end(img);
}).listen(3000, '127.0.0.1')