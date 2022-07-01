var http = require('http');
var fs   = require('fs');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]


http.createServer( function(req, res){ 
  if( req.url === '/api'){ //Si la URL es / devolvemos el HTML
    res.writeHead(200, { 'Content-Type':'application/json' }) //Vamos a devolver texto en formato JSON
    res.end( JSON.stringify(beatles) ); //Antes de enviar el objeto, debemos parsearlo y transformarlo a un string JSON

	}else if(req.url === "/api/John%20Lennon")
  {
    res.writeHead(200, { 'Content-Type':'application/json' });
    for (const key in beatles) {
      for(const key1 in beatles[key]){
        console.log(`${beatles[key][key1]}`);
        console.log(`${key} ${beatles[key][key1]}`);
      }
    }
    res.end( JSON.stringify(beatles[0]) );
  }else if(req.url === "/api/Paul%20McCartney")
  {
    res.writeHead(200, { 'Content-Type':'application/json' });
    for (const key in beatles) {
      for(const key1 in beatles[key]){
        console.log(`${beatles[key][key1]}`);
      }
    }
    res.end( JSON.stringify(beatles[1]) );
  }else if(req.url === "/api/John%20Lennon")
  {
    res.writeHead(200, { 'Content-Type':'application/json' });
    for (const key in beatles) {
      for(const key1 in beatles[key]){
        console.log(`${beatles[key][key1]}`);
      }
    }
    res.end( JSON.stringify(beatles[0]) );
  }else if(req.url === "/api/John%20Lennon")
  {
    res.writeHead(200, { 'Content-Type':'application/json' });
    for (const key in beatles) {
      for(const key1 in beatles[key]){
        console.log(`${beatles[key][key1]}`);
      }
    }
    res.end( JSON.stringify(beatles[0]) );
  }else{
		res.writeHead(404); //Ponemos el status del response a 404: Not Found
		res.end(); //No devolvemos nada más que el estado.
  }

	

}).listen(1337, '127.0.0.1');