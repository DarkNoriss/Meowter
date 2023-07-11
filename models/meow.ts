import { Schema, model, models } from 'mongoose';

const MeowSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  context: {
    type: String,
    required: [true, 'Meow context is required.'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required.'],
  },
  remeows: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Meow',
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Meow',
    },
  ],
});

const Meow = models.Meow || model('Meow', MeowSchema);

export default Meow;
