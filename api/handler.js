const Alexa = require('alexa-sdk');

module.exports.myKitchen =  (event, context) => {

	var alexa = Alexa.handler(event, context);
	alexa.appId = process.env.APP_ID;

	console.log('==================');
	console.log('event', event);
	console.log('==================');


	alexa.registerHandlers({
		'UseItem': function () {
			this.response.speak('Thanks for using UseItem.');
			this.emit(':responseReady');
		},
		'AMAZON.HelpIntent': function () {
			this.response.speak('ask me a yes or no question.').listen('try again');
			this.emit(':responseReady');
		},
		'AMAZON.CancelIntent': function () {
				this.response.speak('Goodbye!');
				this.emit(':responseReady');
		},
		'AMAZON.StopIntent': function () {
				this.response.speak('Goodbye!');
				this.emit(':responseReady');
		},
		'Unhandled': function() {
			this.emit(':ask', 'Sorry I didnt understand that. Say help for assistance.');
		},
		'LaunchRequest': function () {
    	this.emit(':tell', 'Well hello!');
    },
	});
  alexa.execute();
};
