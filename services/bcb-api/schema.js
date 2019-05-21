const schema = `
    type Product {
        id: String!
        name: String!
        price: String!
    }

    type Order {
        id: String!
        productId: String!
        customerName: String!
        deliveryAddress: String
        quantity: Int!
    }

    type Query {
        getProducts: [Product]!
    }
`;

export { schema }