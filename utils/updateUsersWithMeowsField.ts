import Meow from '@/models/meow';
import User from '@/models/user';

export const updateUsersWithMeowsField = async () => {
  try {
    // Find all User documents
    const users = await User.find();

    // Loop through each user and add the meows field
    for (const user of users) {
      // Find all Meow documents created by the user
      const meows = await Meow.find({ creator: user._id });

      // Get the meow IDs and assign them to the user's meows field
      const meowIds = meows.map((meow: any) => meow._id);
      console.log(meowIds.length);
      const updatedUser = {
        ...user.toObject(),
        meows: meowIds,
      };

      // Save the updated user document
      await User.findByIdAndUpdate(user._id, updatedUser);
    }

    console.log('Users updated successfully!');
  } catch (error) {
    console.error('Error updating users:', error);
  }
};
