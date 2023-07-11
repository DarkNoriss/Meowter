import Meow from '@/models/meow';
import { connectToDB } from '@/utils/connectToDB';
import { getServerSession } from 'next-auth';
import { options } from '../../auth/[...nextauth]/options';

export const POST = async (req: Request) => {
  const { context } = await req.json();
  const session = await getServerSession(options);

  try {
    await connectToDB();

    const newMeow = new Meow({
      creator: session?.user.id,
      context,
      date: new Date(),
    });

    await newMeow.save();

    return new Response(JSON.stringify(newMeow), { status: 201 });
  } catch (err) {
    return new Response('Failed to create a new meow', { status: 500 });
  }
};
