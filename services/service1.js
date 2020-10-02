const AWS = require("aws-sdk");

AWS.config.region = "us-east-1";
const endpoint = new AWS.Endpoint("http://host.docker.internal:3001");
const lambda = new AWS.Lambda({ endpoint });

exports.handler = (event, context) => {
  var params = {
    FunctionName: "Service2", // the lambda function we are going to invoke
    InvocationType: "RequestResponse",
    LogType: "None",
    Payload: JSON.stringify({ name: "World" }),
  };

  lambda.invoke(params, function (err, data) {
    if (err) {
      context.fail(err);
    } else {
      context.succeed("Service2 " + JSON.parse(data.Payload));
    }
  });
};
