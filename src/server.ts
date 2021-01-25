import "reflect-metadata";
import './utils/connection';
import { buildSchema } from "graphql";
import { ApolloServer } from 'apollo-server';

const bootstrap = async () => {

  const schema = await buildSchema({
    resolvers: [],
  });

  const server = new ApolloServer({schema});

  server.listen({ port: 3336 }, () => console.log('started server!'))
}

bootstrap();