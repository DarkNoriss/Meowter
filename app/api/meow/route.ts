import Meow from '@/models/meow';
import { connectToDB } from '@/utils/connectToDB';

export const GET = async () => {
  try {
    await connectToDB();

    const meows = await Meow.find({}).populate('creator').sort({ date: -1 });

    return new Response(JSON.stringify(meows), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch all meows', { status: 500 });
  }
};
