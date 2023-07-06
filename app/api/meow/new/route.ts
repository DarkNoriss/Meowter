import Meow from '@/models/meow';
import { connectToDB } from '@/utils/connectToDB';

export const POST = async (req: Request) => {
  const { userId, context } = await req.json();
  console.log(context);
  try {
    await connectToDB();

    const newMeow = new Meow({
      creator: userId,
      context: context,
    });

    await newMeow.save();

    return new Response(JSON.stringify(newMeow), { status: 201 });
  } catch (err) {
    return new Response('Failed to create a new meow', { status: 500 });
  }
};
