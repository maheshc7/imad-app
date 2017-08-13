var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var aboutme = {
    title: 'About Me|mahesh Choudhary',
    heading: 'About Me',
    date: 'Aug 13, 2017',
    content:`
        <p>Hi I'm Mahesh. This is my first website which I'm currenty devloping 
			by following the tutorials on IMAD.</p>
				
		<p> This is fun. As I get to learn a lot of stuff. Hope you like my website.</p>
			
		<p>Please let me know what you feel. To connect with me to to the <a href="/Contact">Contact</a> page.</p>`
    
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
    	    <head>
    		    <title>${title}</title>
    		    <meta name="viewport" content="width=device-width, initial-scale=1">
    	    </head>
    	    <body>
            	<div class="container">
            		<div>
            			<a href="/">Home</a>
            		</div>
            		<hr/>
            		<h3>${heading}</h3>
            		<div>
            			${date}
            		</div>
            		<div>
            			${content}
            		</div>
            	</div>
            </body>
        </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/about-me', function(req,res){
    res.send(createTemplate(aboutme));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
