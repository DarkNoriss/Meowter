import { Schema, model, models } from 'mongoose';

const MeowSchema = new Schema({
  creator: String,
  context: String,
  date: { type: Date, default: Date.now() },
  meta: {
    remeows: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
  },
});

const Meow = models.Meow || model('Meow', MeowSchema);

export default Meow;
