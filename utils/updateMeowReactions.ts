import Meow from '@/models/meow';

export const updateMeowReactions = async () => {
  try {
    const meows = await Meow.find();

    for (const meow of meows) {
      delete meow.meta;

      meow.remeows = [];
      meow.comments = [];
      meow.likes = [];

      await meow.save();
    }

    console.log('Meows updated successfully!');
  } catch (error) {
    console.error('Error updating meows:', error);
  }
};
