import Meow from '@/models/meow';
import User from '@/models/user';

export const updateUsersWithMeowsField = async () => {
  try {
    const users = await User.find();

    for (const user of users) {
      const meows = await Meow.find({ creator: user._id });

      const meowIds = meows.map((meow: any) => meow._id);

      const updatedUser = {
        ...user.toObject(),
        meows: meowIds,
      };

      await User.findByIdAndUpdate(user._id, updatedUser);
    }

    console.log('Users updated successfully!');
  } catch (error) {
    console.error('Error updating users:', error);
  }
};
