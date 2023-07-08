import Meow from '@/models/meow';
import { connectToDB } from '@/utils/connectToDB';

export const GET = async (req: any, { params }: { params: string }) => {
  try {
    await connectToDB();

    const meows = await Meow.find({ creator: params })
      .populate('creator')
      .sort({ date: -1 });

    return new Response(JSON.stringify(meows), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
};
