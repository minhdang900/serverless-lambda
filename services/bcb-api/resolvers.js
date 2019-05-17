import dynamodb from 'serverless-dynamodb-client';
// const AWSXRay = require('aws-xray-sdk'); // eslint-disable-line global-require
// const AWS = AWSXRay.captureAWS(require('aws-sdk')); // eslint-disable-line global-require

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();
// const docClient = dynamodb.doc;

const promisify = foo => new Promise((resolve, reject) => {
  foo((error, result) => {
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
});

const data = {
  getProducts: async () => {
    const result = await promisify((callback) => {
      docClient.query({
        TableName: 'Products',
        KeyConditionExpression: 'id = :id',
        ExpressionAttributeValues: {
          ':id': '1',
        },
      }, callback);
    });
    return result.Items.map((item) => {
      const product = {};
      product.id = item.id;
      product.name = item.name;
      product.price = item.price;
      return product;
    });
  },
};

export const resolvers = {
  Query: {
    getProducts: () => data.getProducts(),
  },
};
