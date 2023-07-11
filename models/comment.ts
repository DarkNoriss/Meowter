import { Schema, model, models } from 'mongoose';

const CommentSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  meow: {
    type: Schema.Types.ObjectId,
    ref: 'Meow',
  },
  content: {
    type: String,
    required: [true, 'Comment content is required.'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required.'],
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Comment = models.Comment || model('Comment', CommentSchema);

export default Comment;
