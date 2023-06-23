import  {faker} from '@faker-js/faker';
import Tweet from '../models/Tweet';

const TWEETS_TOTAL = 10;

export default async (): Promise<void> => {
  try {
    await Tweet.deleteMany({}); // 'remove' is deprecated in mongoose. 'deleteMany' is suggested.

    await Promise.all(
      Array.from({ length: TWEETS_TOTAL }).map(async () => {
        await Tweet.create({
          text: faker.lorem.paragraphs(1),
        })
      })
    );
  } catch (error: unknown) {
    console.error('Error occurred while mocking data:', error);
    throw error;
  }
};
