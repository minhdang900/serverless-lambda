// Private API
module.exports.privateEndpoint = (event, context, cb) => {
   console.log(`Enviroment variable ${process.env.LAYER_COMMON_ARN}`);
   const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello REST, authenticated user: ' + event.requestContext.authorizer.principalId + ' !',
      input: event,
    }),
  };
  cb(null, response);
};