import Meow from '@/models/meow';
import { connectToDB } from '@/utils/connectToDB';
import { getServerSession } from 'next-auth';
import { options } from '../../auth/[...nextauth]/options';
import User from '@/models/user';
import { updateUsersWithMeowsField } from '@/utils/updateUsersWithMeowsField';

export const POST = async (req: Request) => {
  const { context } = await req.json();
  const session = await getServerSession(options);

  try {
    if (session) {
      await connectToDB();

      const newMeow = new Meow({
        creator: session.user.id,
        context,
        date: new Date(),
      });

      await newMeow.save();

      const user = await User.findById(session.user.id);

      if (user) {
        user.meows.push(newMeow._id);
        await user.save();
      }

      return new Response(JSON.stringify(newMeow), { status: 201 });
    }
  } catch (err) {
    return new Response('Failed to create a new meow', { status: 500 });
  }
};
