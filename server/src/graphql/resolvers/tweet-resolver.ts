import Tweet from '../../models/Tweet';

export default {
  getTweets: async () => {
    try {
      const tweets = await Tweet.find({}).lean();
      return tweets;
    } catch (error) {
      throw error;
    }
  },
};
