// Private API
module.exports.privateEndpoint = (event, context, cb) => {
   console.log(`Enviroment variable ${process.env.LAYER_COMMON_ARN}`);
    cb(null, { message: 'api authorize success' });
  };