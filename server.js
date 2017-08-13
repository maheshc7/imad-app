var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pages = {
    
    'about-me': {
        title: 'About Me|Mahesh Choudhary',
        heading: 'About Me',
        date: 'Aug 13, 2017',
        content:`
            <p>Hi I'm Mahesh. This is my first website which I'm currenty devloping 
    			by following the tutorials on IMAD.</p>
    				
    		<p> This is fun. As I get to learn a lot of stuff. Hope you like my website.</p>
    			
    		<p>Please let me know what you feel. To connect with me to to the <a href="/contact">Contact</a> page.</p>`,
    },
    
    'current-projecs': {
        title: 'Projects|Mahesh Choudhary',
        heading: 'Current Projects',
        date: new Date(),
        content:`
             <div class="center">
                <img src="https://goo.gl/35xbsn" class="img-medium"/>
            </div>
        
            <p>Android : Learning Android Programming Basics from Google in Udacity.com </p>
    				
    		<p>App Devleopment : Undergoing a course on 'Introduction to Modern Application Devleopment(IMAD)' </p>
    		
    		<p>I'm currently pursuing my B.Tech degree in Computer Science and Engineering from SRM University, Vadapalani</p>
    			
    		<p>Please let me know what you feel. To connect with me to to the <a href="/contact">Contact</a> page.</p>`,
    },
    
    contact:{
        title: 'Contact|Mahesh Choudhary',
        heading: 'Contact',
        date: 'Aug 13, 2017',
        content:`,
            <p> Facebook <a href="www.facebook.com/maky007"></a></p>
    				
    		<p> Instagram  <a href="www.instagram.com/maheshc7"></a></p>
    			
    		<p>G-mail  <a href="https://mail.google.com/mail/u/0/#inbox?compose=15dda9ece135cb1d"></a></p>`,
    }
    
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
    	    <head>
    	        <link href="/ui/style.css" rel="stylesheet" />
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

app.get('/:pageName', function(req,res){
    res.send(createTemplate(pages[pageName]));
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
