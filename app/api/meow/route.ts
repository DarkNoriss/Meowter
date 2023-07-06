import Meow from '@/models/meow';
import { connectToDB } from '@/utils/connectToDB';

export const GET = async () => {
  try {
    await connectToDB();

    const meows = await Meow.find({}).populate('creator');

    return new Response(JSON.stringify(meows), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
};
