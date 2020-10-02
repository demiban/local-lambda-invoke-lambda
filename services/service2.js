exports.handler = (event, context) => {
  console.log("Service 2 Received event:", JSON.stringify(event, null, 2));
  context.succeed("Hello " + event.name);
};
