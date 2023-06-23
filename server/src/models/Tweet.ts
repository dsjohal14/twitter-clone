import mongoose, { Document, Schema } from 'mongoose';

export interface ITweet extends Document {
  text: string;
}

const TweetSchema: Schema = new Schema({
  text: { type: String, required: true },
});

export default mongoose.model<ITweet>('Tweet', TweetSchema);
