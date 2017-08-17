var express = require('express');
var app = express();
var strftime = require('strftime');

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/index.html');
})

app.get('/:dateTime', (req,res) => {

	var dateNum = Number(req.params.dateTime);
     var time;
	if(isNaN(dateNum)){
      time = Date.parse(req.params.dateTime)
	} else {
		time = new Date(dateNum*1000);
	}

	if(isNaN(time)) {
		res.send({'unix': null, 'natural': null})
	} else {
		res.send({'unix':time/1000,'natural':strftime('%B %d, %Y', new Date(time))});
	}
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running'));