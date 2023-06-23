import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';

import './config/db';
import constants from './config/constants';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mocks from './mocks';

const app = express();

app.use(bodyParser.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app, path: constants.GRAPHQL_PATH });
}

startApolloServer().then(() => {
  mocks().then(() => {
    app.listen(constants.PORT, () => {
      console.log(`App running on port: ${constants.PORT}`);
    });
  });
});
