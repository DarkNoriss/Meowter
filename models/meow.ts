import { Schema, model, models } from 'mongoose';

const MeowSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  context: {
    type: String,
    required: [true, 'Meow is required.'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required.'],
  },
  meta: {
    remeows: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
  },
});

const Meow = models.Meow || model('Meow', MeowSchema);

export default Meow;
