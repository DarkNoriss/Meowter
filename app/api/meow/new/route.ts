import Meow from '@/models/meow';
import { connectToDB } from '@/utils/connectToDB';

export const POST = async (req: Request) => {
  const { userId, context, date } = await req.json();

  try {
    await connectToDB();

    const newMeow = new Meow({
      creator: userId,
      context,
      date,
    });

    await newMeow.save();

    return new Response(JSON.stringify(newMeow), { status: 201 });
  } catch (err) {
    return new Response('Failed to create a new meow', { status: 500 });
  }
};
