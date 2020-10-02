exports.handler = (event, context) => {
  console.log("Service 2 Received event:", JSON.stringify(event));
  context.succeed("Hello " + event.name);
};
