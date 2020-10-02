var AWS = require('aws-sdk');
AWS.config.region = 'eu-east-1';
var ep = new AWS.Endpoint('http://host.docker.internal:3001');
var lambda = new AWS.Lambda({ endpoint: ep });

exports.handler = (event, context) => {
  var params = {
    FunctionName: 'Service2', // the lambda function we are going to invoke
    InvocationType: 'RequestResponse',
    LogType: 'None',
    Payload: JSON.stringify({ name: 'World' })
  };

  lambda.invoke(params, function(err, data) {
    if (err) {
      context.fail(err);
    } else {
      context.succeed('Service2 ' + data.Payload);
    }
  });
};
