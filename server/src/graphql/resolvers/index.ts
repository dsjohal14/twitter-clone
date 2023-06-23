import { IResolvers } from '@graphql-tools/utils';
import TweetResolvers from './tweet-resolver';

const resolvers: IResolvers = {
  Query: {
    getTweets: TweetResolvers.getTweets,
  },
};

export default resolvers;
