// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({ region: 'ap-southeast-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

console.log('Importing data into DynamoDB. Please wait.');

const allProducts = JSON.parse(fs.readFileSync('Products.json', 'utf8'));

allProducts.forEach(function(product) {
  const productParams = {
    TableName: 'Products',
    Item: {
      id: product.id,
      name: product.name,
      price: product.price
    },
  };

  docClient.put(productParams, function(err, data) {
    if (err) {
      console.error(
        'Unable to add product',
        product.name,
        '. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('PutItem succeeded:', product.name);
    }
  });
});