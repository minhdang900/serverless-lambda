const faker = require('faker');
const jsonfile = require('jsonfile');

const numUsers = 10;

const pdata = [];

faker.seed(1000);


for (let i = 0; i < numUsers; i++) {
  const id = i.toString();
  const name = faker.commerce.productName();
  const price = faker.finance.amount();

  const product = {
    id,
    name,
    price,
  };

  pdata.push(product);
}

const pfile = 'Products.json';

jsonfile.writeFileSync(pfile, pdata, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('data created successfully');
  }
});
